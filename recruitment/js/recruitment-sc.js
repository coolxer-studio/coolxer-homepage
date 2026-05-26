function applyForProject() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.addEventListener('click', closeModal);
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h3>申请成功！</h3>
            <p>感谢您对本项目的兴趣！</p>
            <p>请将您的简历和相关作品发送至：</p>
            <a href="mailto:coolxer@163.com" class="modal-email">coolxer@163.com</a>
            <p class="modal-note">邮件主题请注明：【通信安全SDK项目申请】+ 姓名 + 应聘岗位</p>
            <button class="modal-close-btn" onclick="closeModal()">知道了</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    setTimeout(() => {
        overlay.classList.add('show');
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    
    if (overlay && modal) {
        overlay.classList.remove('show');
        modal.classList.remove('show');
        
        setTimeout(() => {
            document.body.removeChild(overlay);
            document.body.removeChild(modal);
        }, 300);
    }
}

function initTimelineToggle() {
    const timelineHeaders = document.querySelectorAll('.timeline-header');
    
    timelineHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const features = this.nextElementSibling;
            const isExpanded = features.classList.contains('expanded');
            
            if (isExpanded) {
                features.classList.remove('expanded');
                this.classList.remove('expanded');
            } else {
                features.classList.add('expanded');
                this.classList.add('expanded');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initTimelineToggle();
});
