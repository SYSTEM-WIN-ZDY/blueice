// 导航栏切换功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 高级滚动触发动画效果
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // 为不同类型的元素添加不同的动画延迟
                const delay = entry.target.dataset.delay || '0';
                entry.target.style.transitionDelay = `${delay}ms`;
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
    animatedElements.forEach((element, index) => {
        // 如果元素已经有data-delay属性，保留它，否则设置交错动画延迟
        if (!element.dataset.delay) {
            element.dataset.delay = (index * 100).toString();
        }
        observer.observe(element);
    });

    // 为卡片元素添加弹性动画
    const cards = document.querySelectorAll('.feature-card, .news-card, .team-member, .value-card, .job-card, .detail-card, .article');
    cards.forEach((card, index) => {
        if (!card.classList.contains('animate-on-scroll')) {
            card.classList.add('animate-on-scroll');
        }
        // 如果卡片已经有data-delay属性，保留它，否则设置默认延迟
        if (!card.dataset.delay) {
            card.dataset.delay = (index * 150).toString();
        }
        observer.observe(card);
    });
};

// 鼠标悬停动画效果
const initHoverAnimations = () => {
    // 为按钮添加弹性悬停效果
    const buttons = document.querySelectorAll('.btn, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(var(--translate-hover)) scale(var(--scale-hover))';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(var(--scale-active))';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(var(--translate-hover)) scale(var(--scale-hover))';
        });
    });

    // 为卡片添加脉冲悬停效果
    const cards = document.querySelectorAll('.card, .feature-card, .news-card, .team-member, .value-card, .job-card, .detail-card, .article');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(var(--translate-hover)) scale(var(--scale-hover))';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 显示加载动画
    showLoadingAnimation();
    
    // 页面加载完成后隐藏加载动画
    window.addEventListener('load', function() {
        hideLoadingAnimation();
        initPageTransition();
        
        // 初始化所有动画效果
        initScrollAnimations();
        initHoverAnimations();
        initBackToTop();
    });
    
    // 如果页面已经加载完成，直接初始化
    if (document.readyState === 'complete') {
        hideLoadingAnimation();
        initPageTransition();
        
        // 初始化所有动画效果
        initScrollAnimations();
        initHoverAnimations();
        initBackToTop();
    }
    
    // 初始化页面过渡动画
    initPageTransition();
    
    // 初始化主题切换功能
    initThemeToggle();
});

// 显示加载动画
function showLoadingAnimation() {
    // 创建加载动画元素
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loadingDiv);
}

// 隐藏加载动画
function hideLoadingAnimation() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
        // 动画完成后移除元素
        setTimeout(() => {
            if (loading.parentNode) {
                loading.parentNode.removeChild(loading);
            }
        }, 500);
    }
}

// 初始化页面过渡效果
function initPageTransition() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('page-transition');
        // 延迟显示以确保动画效果
        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 100);
    }
}

// 初始化主题切换功能
function initThemeToggle() {
    // 创建主题切换按钮
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.className = 'theme-toggle';
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggleBtn.setAttribute('aria-label', '切换主题');
    document.body.appendChild(themeToggleBtn);
    
    // 检查本地存储的主题设置
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 设置初始主题
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // 点击事件
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.documentElement.removeAttribute('data-theme');
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
    });
}

// 初始化返回顶部按钮
function initBackToTop() {
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.setAttribute('aria-label', '返回顶部');
    document.body.appendChild(backToTopBtn);
    
    // 滚动事件监听
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // 点击事件
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 设置初始状态
function initCardAnimations() {
    const cards = document.querySelectorAll('.feature-card, .news-card, .team-member, .value-card, .job-card, .detail-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 初始检查
    initScrollAnimations();
}

// 滚动时触发动画
window.addEventListener('scroll', initScrollAnimations);

// 表单提交处理
function initFormHandlers() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // 实时验证
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateField(this);
            });
            
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 验证所有字段
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // 显示加载状态
                showFormLoading(form);
                
                // 模拟提交过程
                setTimeout(() => {
                    hideFormLoading(form);
                    showFormSuccess(form);
                    form.reset();
                }, 2000);
            } else {
                showFormError(form, '请检查并修正表单中的错误');
            }
        });
    });
}

// 验证单个字段
function validateField(field) {
    const value = field.value.trim();
    const errorElement = field.parentNode.querySelector('.field-error') || createErrorElement(field);
    
    // 清除之前的错误状态
    field.classList.remove('error');
    errorElement.textContent = '';
    
    // 必填验证
    if (field.hasAttribute('required') && !value) {
        field.classList.add('error');
        errorElement.textContent = '此字段为必填项';
        return false;
    }
    
    // 邮箱验证
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            errorElement.textContent = '请输入有效的邮箱地址';
            return false;
        }
    }
    
    // 电话验证
    if (field.type === 'tel' && value) {
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phoneRegex.test(value)) {
            field.classList.add('error');
            errorElement.textContent = '请输入有效的手机号码';
            return false;
        }
    }
    
    // 长度验证
    if (field.hasAttribute('minlength') && value.length < parseInt(field.getAttribute('minlength'))) {
        field.classList.add('error');
        errorElement.textContent = `至少需要${field.getAttribute('minlength')}个字符`;
        return false;
    }
    
    if (field.hasAttribute('maxlength') && value.length > parseInt(field.getAttribute('maxlength'))) {
        field.classList.add('error');
        errorElement.textContent = `最多允许${field.getAttribute('maxlength')}个字符`;
        return false;
    }
    
    return true;
}

// 创建错误提示元素
function createErrorElement(field) {
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    field.parentNode.appendChild(errorElement);
    return errorElement;
}

// 显示表单加载状态
function showFormLoading(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';
    }
}

// 隐藏表单加载状态
function hideFormLoading(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtn.getAttribute('data-original-text') || '提交申请';
    }
}

// 显示表单成功消息
function showFormSuccess(form) {
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.innerHTML = '<i class="fas fa-check-circle"></i> 提交成功！我们会尽快与您联系。';
    
    form.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
}

// 显示表单错误消息
function showFormError(form, message) {
    const errorMsg = document.createElement('div');
    errorMsg.className = 'form-error';
    errorMsg.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    form.appendChild(errorMsg);
    
    setTimeout(() => {
        errorMsg.remove();
    }, 5000);
}

// 申请按钮点击事件
const applyButtons = document.querySelectorAll('.apply-btn');
applyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const jobTitle = this.closest('.job-card').querySelector('h3').textContent;
        alert(`您已申请"${jobTitle}"职位。请填写页面下方的申请表单以完成申请流程。`);
        
        // 滚动到表单位置
        const formSection = document.querySelector('.contact-form');
        if (formSection) {
            window.scrollTo({
                top: formSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// 产品页面特性动画
const featureBoxes = document.querySelectorAll('.feature-box');
featureBoxes.forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateX(-20px)';
    box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    box.style.transitionDelay = `${index * 0.1}s`;
});

const animateFeatures = () => {
    featureBoxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (boxPosition < screenPosition) {
            box.style.opacity = '1';
            box.style.transform = 'translateX(0)';
        }
    });
};

// 产品页面特性动画初始化和滚动监听
if (featureBoxes.length > 0) {
    window.addEventListener('scroll', animateFeatures);
    // 初始检查
    animateFeatures();
}

// 首页特色板块动画
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
});

const animateFeatureCards = () => {
    featureCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// 首页特色板块动画初始化和滚动监听
if (featureCards.length > 0) {
    // 初始检查
    animateFeatureCards();
    window.addEventListener('scroll', animateFeatureCards);
}

// 新闻卡片悬停效果增强
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});