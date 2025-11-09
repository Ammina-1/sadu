console.log('🎂 Birthday site loading...');

// Generate 12 months starting from current month
const generateMonths = () => {
    const months = [];
    const now = new Date();
    
    for (let i = 0; i < 12; i++) {
        const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const label = `${date.toLocaleDateString('en-US', { month: 'long' })} ${date.getFullYear()}`;
        months.push({ key, label });
    }
    
    return months;
};

// Month teasers
const teasers = {
    '2024-11': 'A little note about your wonderful warmth and kindness.',
    '2024-12': 'Celebrating the joy you bring to every winter day.',
    '2025-01': 'New year thoughts about your incredible strength.',
    '2025-02': 'February feelings about your caring heart.',
    '2025-03': 'Spring memories of your endless generosity.',
    '2025-04': 'April appreciation for your beautiful spirit.',
    '2025-05': 'May musings about your delightful laugh.',
    '2025-06': 'June joys thinking about your thoughtful ways.',
    '2025-07': 'Summer sunshine reminds me of your bright energy.',
    '2025-08': 'August admiration for your amazing resilience.',
    '2025-09': 'September sentiments about your gentle wisdom.',
    '2025-10': 'October observations of your inspiring courage.',
    '2025-11': 'November notes of love and appreciation.',
    '2025-12': 'December dreams and winter wishes.',
    '2026-01': 'January joys for the new year ahead.',
    '2026-02': 'February feelings of endless love.',
    '2026-03': 'March memories to treasure forever.',
    '2026-04': 'April appreciation for your beautiful soul.',
    '2026-05': 'May messages of love and gratitude.',
    '2026-06': 'June joys and summer celebrations.',
    '2026-07': 'July letters filled with sunshine.',
    '2026-08': 'August admiration and warm wishes.',
    '2026-09': 'September songs of friendship.',
    '2026-10': 'October observations of your wonderful spirit.'
};

// Full letter content - you can replace these with your heartfelt messages
const letterContent = {
    '2024-11': '',
    '2024-12': '',
    '2025-01': '',
    '2025-02': '',
    '2025-03': '',
    '2025-04': '',
    '2025-05': '',
    '2025-06': '',
    '2025-07': '',
    '2025-08': '',
    '2025-09': '',
    '2025-10': '',
    '2025-11': '',
    '2025-12': '',
    '2026-01': '',
    '2026-02': '',
    '2026-03': '',
    '2026-04': '',
    '2026-05': '',
    '2026-06': '',
    '2026-07': '',
    '2026-08': '',
    '2026-09': '',
    '2026-10': ''
};

// Image mapping for each month
const monthImages = {
    '2025-11': 'Dearest Sadu (1).png',
    '2025-12': 'Dearest Sadu (13).png', 
    '2026-01': 'Dearest Sadu (4).png',
    '2026-02': 'Dearest Sadu (5).png',
    '2026-03': 'Dearest Sadu (6).png',
    '2026-04': 'Dearest Sadu (7).png',
    '2026-05': 'Dearest Sadu (8).png',
    '2026-06': 'Dearest Sadu (9).png',
    '2026-07': 'Dearest Sadu (10).png',
    '2026-08': 'Dearest Sadu (11).png',
    '2026-09': 'Dearest Sadu (3).png',
    '2026-10': 'Dearest Sadu (12).png'
};

// Simple confetti
const confetti = () => {
    console.log('🎉 Confetti!');
    
    // Create confetti canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '10000';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const pieces = [];
    const colors = ['#ffb6c1', '#87ceeb', '#dda0dd', '#98fb98', '#f0e68c', '#ffc0cb', '#e6e6fa'];
    const shapes = ['circle', 'heart', 'star'];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 6,
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 5 - 2.5
        });
    }
    
    // Animate confetti
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = pieces.length - 1; i >= 0; i--) {
            const piece = pieces[i];
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.vy += 0.1; // gravity
            piece.rotation += piece.rotationSpeed;
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            
            // Draw different shapes
            if (piece.shape === 'heart') {
                // Draw heart shape
                const size = piece.size;
                ctx.beginPath();
                ctx.moveTo(0, size/4);
                ctx.bezierCurveTo(-size/2, -size/4, -size, size/4, 0, size);
                ctx.bezierCurveTo(size, size/4, size/2, -size/4, 0, size/4);
                ctx.fill();
            } else if (piece.shape === 'star') {
                // Draw star shape
                const size = piece.size;
                ctx.beginPath();
                for (let j = 0; j < 5; j++) {
                    const angle = (j * 144 * Math.PI) / 180;
                    const x = Math.cos(angle) * size/2;
                    const y = Math.sin(angle) * size/2;
                    if (j === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fill();
            } else {
                // Draw circle
                ctx.beginPath();
                ctx.arc(0, 0, piece.size/2, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.restore();
            
            // Remove pieces that have fallen off screen
            if (piece.y > canvas.height) {
                pieces.splice(i, 1);
            }
        }
        
        if (pieces.length > 0) {
            requestAnimationFrame(animate);
        } else {
            document.body.removeChild(canvas);
        }
    };
    
    animate();
};

// Birthday modal functions
const showBirthdayModal = () => {
    const modal = document.getElementById('birthdayModal');
    modal.style.display = 'flex';
    confetti();
    console.log('🎂 Birthday modal opened!');
    
    // Add click outside to close
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeBirthdayModal();
        }
    };
};

const closeBirthdayModal = () => {
    const modal = document.getElementById('birthdayModal');
    modal.style.display = 'none';
    console.log('Modal closed');
};

// Make it globally accessible
window.closeBirthdayModal = closeBirthdayModal;

// Letter modal functions
const showLetterModal = (monthKey, monthLabel) => {
    const modal = document.getElementById('letterModal');
    const monthTitle = document.getElementById('letterMonth');
    const letterText = document.getElementById('letterText');
    
    console.log(`Opening letter for: ${monthKey} (${monthLabel})`);
    
    monthTitle.textContent = monthLabel;
    letterText.innerHTML = letterContent[monthKey] || '';
    
    // Special handling for specific months - use different images
    const letterContentDiv = modal.querySelector('.letter-content');
    const imageToUse = monthImages[monthKey] || 'Dearest Sadu.png';
    console.log(`Using image: ${imageToUse} for month: ${monthKey}`);
    letterContentDiv.style.backgroundImage = `url('${imageToUse}')`;
    
    // Clear any existing gifts
    const existingGifts = letterContentDiv.querySelectorAll('.letter-gift');
    existingGifts.forEach(gift => gift.remove());
    
    // Add gifts for specific months
    const giftFiles = {
        '2025-11': 'tenth gif.gif',
        '2025-12': 'second letter.gif',
        '2026-01': 'third letter.gif',
        '2026-02': 'fourth letter.gif',
        '2026-03': 'fifth letter.gif',
        '2026-04': 'sixth letter.gif',
        '2026-05': 'seventh letter.gif',
        '2026-06': 'eighth letter.gif',
        '2026-07': 'ninth letter.gif',
        '2026-08': 'first letter.gif',
        '2026-09': 'eleventh letter.gif',
        '2026-10': 'twelfth letter.gif'
    };

    const giftFile = giftFiles[monthKey];
    if (giftFile) {
        // Create 6 gifts - 3 on left, 3 on right
        const giftPositions = [
            // Left side
            { top: '15%', left: '5%' },
            { top: '45%', left: '5%' },
            { top: '75%', left: '5%' },
            // Right side
            { top: '15%', right: '5%' },
            { top: '45%', right: '5%' },
            { top: '75%', right: '5%' }
        ];

        giftPositions.forEach(position => {
            const gift = document.createElement('img');
            gift.src = giftFile;
            gift.className = 'letter-gift';
            
            let positionStyle = `
                position: absolute;
                width: 120px;
                height: auto;
                z-index: 15;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                top: ${position.top};
            `;
            
            if (position.left) {
                positionStyle += `left: ${position.left};`;
            } else {
                positionStyle += `right: ${position.right};`;
            }
            
            gift.style.cssText = positionStyle;
            letterContentDiv.appendChild(gift);
        });
    }
    
    modal.style.display = 'flex';
    console.log(`📝 Letter opened for ${monthLabel}`);
    
    // Add click outside to close
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeLetterModal();
        }
    };
};

const closeLetterModal = () => {
    const modal = document.getElementById('letterModal');
    modal.style.display = 'none';
    console.log('Letter closed');
};

// Make letter functions globally accessible
window.closeLetterModal = closeLetterModal;
window.showLetterModal = showLetterModal;

// Main app
class App {
    constructor() {
        this.months = generateMonths();
        this.init();
    }
    
    init() {
        this.renderCards();
        this.bindEvents();
    }
    
    renderCards() {
        const grid = document.getElementById('cardsGrid');
        
        this.months.forEach((month) => {
            const card = document.createElement('div');
            card.className = 'month-card';
            
            card.innerHTML = `
                <h3 class="card-month">📅 ${month.label}</h3>
                <p style="font-size: 0.8em; color: #ff69b4; margin-top: 8px; font-style: italic;">💌 Click to read your letter</p>
            `;
            
            card.onclick = () => showLetterModal(month.key, month.label);
            grid.appendChild(card);
        });
    }
    
    bindEvents() {
        const btn = document.getElementById('replayBtn');
        if (btn) {
            btn.onclick = () => {
                showBirthdayModal();
            };
        }
    }
}

// Start app
document.addEventListener('DOMContentLoaded', () => {
    new App();
    
    // Add bow decorations around hero text
    const hero = document.querySelector('.hero');
    const bowPositions = [
        // Left side arrow formation
        { top: '10%', left: '-70px' },
        { top: '40%', left: '-100px' },
        { top: '70%', left: '-70px' },
        // Right side arrow formation
        { top: '10%', right: '-70px' },
        { top: '40%', right: '-100px' },
        { top: '70%', right: '-70px' }
    ];

    bowPositions.forEach(position => {
        const bow = document.createElement('img');
        bow.src = 'bow 2.0.jpg';
        bow.style.cssText = `
            position: absolute;
            width: 30px;
            height: 30px;
            top: ${position.top};
            ${position.left ? `left: ${position.left};` : `right: ${position.right};`}
            z-index: 1;
        `;
        hero.appendChild(bow);
    });
    
    // Show birthday modal on first visit
    const hasSeenModal = localStorage.getItem('birthday_seen');
    if (!hasSeenModal) {
        setTimeout(() => {
            showBirthdayModal();
            localStorage.setItem('birthday_seen', 'true');
        }, 1000);
    }
    
    console.log('✅ Site loaded with birthday modal!');
});
