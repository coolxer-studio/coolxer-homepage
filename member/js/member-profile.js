window.addEventListener('DOMContentLoaded', function () {
    const avatarElement = document.getElementById('profileAvatar');

    const avatarGradients = {
        'Z': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'L': 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        'W': 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
        'Q': 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
        'S': 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
        'E': 'linear-gradient(45deg, #5ee7df 0%, #b490ca 100%)'
    };

    function getAvatarGradient(avatar) {
        if (avatar) {
            const charCode = avatar.charCodeAt(0);
            const hue1 = charCode % 360;
            const hue2 = (hue1 + 180) % 360;
            return `linear-gradient(45deg, hsl(${hue1}, 70%, 60%) 0%, hsl(${hue2}, 70%, 60%) 100%)`;
        }
        return 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)';
    }

    const avatar = 'user1.png';
    const isRealName = true;
    const badgeElement = document.getElementById('nameBadge');

    if (isRealName) {
        badgeElement.textContent = '实名';
        badgeElement.title = '实名认证';
        badgeElement.classList.remove('anonymous');
    } else {
        badgeElement.textContent = '匿名';
        badgeElement.title = '匿名用户';
        badgeElement.classList.add('anonymous');
    }

    if (avatar && /\.(png|jpg|jpeg|gif|svg)$/i.test(avatar)) {
        avatarElement.textContent = '';
        avatarElement.style.backgroundImage = `url('images/${avatar}')`;
    } else {
        avatarElement.textContent = avatar;
        avatarElement.style.backgroundImage = 'none';
        avatarElement.style.background = getAvatarGradient(avatar);
    }
});