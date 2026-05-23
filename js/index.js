function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3;
        const duration = 2 + Math.random() * 5;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;

        starsContainer.appendChild(star);
    }
}

function showPopup() {
    document.getElementById('popup').classList.add('show');
}

function hidePopup() {
    document.getElementById('popup').classList.remove('show');
}

document.querySelector('.btn-enter').addEventListener('click', function () {
    this.innerHTML = '加载中...';
    this.style.background = 'linear-gradient(45deg, #2ed573, #1dd1a1)';
    setTimeout(() => {
        this.innerHTML = '加入社区';
        this.style.background = 'linear-gradient(45deg, #ff6b6b, #e8cb97)';
        showPopup();
    }, 500);
});

document.getElementById('cancelBtn').addEventListener('click', function () {
    hidePopup();
});

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    document.querySelector('.community-intro').style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(50px)`;
});

document.querySelectorAll('.scroll-down').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

let hasScrolled = false;
window.addEventListener('scroll', () => {
    if (window.scrollY > 100 && !hasScrolled) {
        hasScrolled = true;
        setTimeout(() => {
            hasScrolled = false;
        }, 1000);
    }
});

function initMembersCarousel() {
    const avatarGradients = [
        'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(45deg, #d299c2 0%, #fef9d7 100%)',
        'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(45deg, #84fab0 0%, #8fd3f4 100%)',
        'linear-gradient(45deg, #80ffdb 0%, #5390d9 100%)'
    ];

    const members = [
        { id: "wushaojie", name: "吴绍杰", role: "架构师", avatar: "杰" },
        { id: "xiaobai1894", name: "小白", role: "LLM应用架构师", avatar: "白" },
        { id: "zhangbingsen", name: "张炳森", role: "系统架构师", avatar: "member/images/zhangbingsen.png" },
        { id: "qualdex", name: "qualdex", role: "高级产品经理", avatar: "QU" },
        { id: "chenjingshan", name: "陈敬山", role: "高级工程师", avatar: "member/images/chenjingshan.png" },
        { id: "pinetec", name: "pinetec", role: "解决方案专家", avatar: "member/images/pinetec.jpg" },
        { id: "vibepig", name: "VibePig", role: "安全研究员", avatar: "VP" },
        { id: "aqi", name: "阿七", role: "移动安全专家", avatar: "七" },
        { id: "example", name: "待位", role: "优秀的你", avatar: "member/images/user1.png" }

    ];

    const carousel = document.getElementById('membersCarousel');
    const indicatorsContainer = document.getElementById('carouselIndicators');

    members.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';

        const isImage = /\.(png|jpg|jpeg|gif|svg)$/i.test(member.avatar);
        let avatarElement;

        if (isImage) {
            avatarElement = `<img src="${member.avatar}" alt="${member.name}">`;
        } else {
            const gradientIndex = index % avatarGradients.length;
            const gradient = avatarGradients[gradientIndex];
            avatarElement = `<div style="background: ${gradient}; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; font-size: 2rem;">${member.avatar}</div>`;
        }

        memberCard.innerHTML = `
            <a href="member/member-profile-${encodeURIComponent(member.id)}.html" rel="noopener noreferrer" style="text-decoration: none;">
                <div class="member-avatar">${avatarElement}</div>
            </a>
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
        `;
        carousel.appendChild(memberCard);
    });

    const cardWidth = 180;
    const visibleCards = Math.min(5, members.length);
    const totalSlides = Math.ceil(members.length / visibleCards);

    carousel.style.width = `${members.length * cardWidth}px`;

    let currentIndex = 0;

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.dataset.index = i;
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }

    const indicators = document.querySelectorAll('.indicator');

    function updateCarousel() {
        const offset = -currentIndex * visibleCards * cardWidth;
        carousel.style.transform = `translateX(${offset}px)`;

        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    setTimeout(() => {
        updateCarousel();
    }, 100);

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

    let autoPlayInterval = setInterval(nextSlide, 3000);
    const carouselContainer = document.querySelector('.carousel-container');

    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 3000);
    });

    updateCarousel();
}

document.addEventListener('DOMContentLoaded', function () {
    createStars();
    initMembersCarousel();
});
