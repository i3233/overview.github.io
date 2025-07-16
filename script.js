// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 为所有带有data-qr属性的链接添加事件监听器
    const mobileLinks = document.querySelectorAll('.portfolio-link[data-qr]');
    mobileLinks.forEach(link => {
        link.addEventListener('click', handleMobileView);
    });
});

/**
 * 处理移动端链接点击事件
 * @param {Event} e - 点击事件对象
 */
function handleMobileView(e) {
    // 检查是否为PC端（屏幕宽度大于600px）
    if (window.innerWidth > 600) {
        e.preventDefault();
        
        // 获取链接的URL和二维码图片路径
        const url = e.target.href;
        const qrImage = e.target.getAttribute('data-qr');
        
        // 显示弹窗
        showMobileTip(url, qrImage);
        
        return false;
    }
    
    // 移动端直接跳转
    return true;
}

/**
 * 显示移动端提示弹窗
 * @param {string} url - 目标URL
 * @param {string} qrImage - 二维码图片路径
 */
function showMobileTip(url, qrImage) {
    const modal = document.getElementById('mobile-tip-modal');
    const qrElement = document.getElementById('mobile-tip-qr');
    const continueLink = document.getElementById('mobile-tip-continue');
    
    // 设置二维码图片
    qrElement.src = qrImage;
    
    // 设置继续访问链接
    continueLink.href = url;
    
    // 显示弹窗
    modal.style.display = 'flex';
}

/**
 * 关闭移动端提示弹窗
 */
function closeMobileTip() {
    const modal = document.getElementById('mobile-tip-modal');
    modal.style.display = 'none';
}

// 点击弹窗背景关闭弹窗
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('mobile-tip-modal');
    
    modal.addEventListener('click', function(e) {
        // 如果点击的是弹窗背景（不是内容区域），则关闭弹窗
        if (e.target === modal) {
            closeMobileTip();
        }
    });
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeMobileTip();
        }
    });
}); 