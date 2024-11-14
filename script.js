// Data for emojis
const emojiData = {
    smileys: ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😇','🙂','🙃','😌','😍','😘','😗','😙','😚','😋','😜','😝','🤑','🤗','🤔','🤐','🤨','😐','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾'],
    animals: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐚','🐞','🐜','🦗','🕷️','🕸️','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🐐','🦌','🐕','🐩','🐈','🐓','🦃','🕊️','🐇','🐁','🐀','🐿️','🦔'],
    nature: ['🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪️','🌈','☀️','🌤️','⛅','🌥️','☁️','🌦️','🌧️','⛈️','🌩️','🌨️','❄️','☃️','⛄','🌬️','💨','💧','💦','☔','☂️','🌊','🌫️'],
    food: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥒','🥬','🌶️','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🥯','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🥗','🥘','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧','🍨','🍦','🥧','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🧂','🥤','🧃','🧉','🧊','🍩','🍪','🌰','🥜','🍯','🥛','🍼','☕','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🍽️','🍴','🥄','🔪','🏺'],
    activities: ['⚽','🏀','🏈','⚾','🎾','🏐','🏉','🎱','🏓','🏸','🥅','🏒','🥊','🎳','🏹','🥋','🏆','🏅','🎽','🥌','⛸️','🥇','🥈','🥉','🏵️','🎗️','🎖️','🏵️','🎗️','🎫','🎟️','🎭','🎨','🎪','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','🎬','🎮','👾','🎯','🎲','🧩','♟️','🧸','🎴','🃏','🎭','🖼️','🎨'],
    travel: ['🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🏍️','🛵','🚲','🛴','🚏','🛣️','🛤️','🏁','🚧','⚓','⛵','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🌌','🛎️','🧳','⌛','⏳','⌚','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏞️','🏟️','🏛️','🏗️','🧱','🛤️','🛣️','🏘️','🏚️','🏠','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭','🏯','🏰','💒','🗼','🗽','⛪','🕌','🕍','⛩️','🕋','⛲','⛺','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','♨️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚈','🚝','🚞','🚋','🚆','🚇','🚊','🚉','🚁','🛩️','✈️','🛫','🛬','🚀','🛸','🛶','⛵','🚤','🛥️','🚢','⚓','⛴️','🛳️','🚁','🚟','🚠','🚡','🚞','🚝'],
    objects: ['⌚','📱','📲','💻','⌨️','🖥️','🖨️','🖱️','🖲️','🕹️','🗜️','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽️','🎞️','📞','☎️','📟','📠','📺','📻','🎙️','🎚️','🎛️','⏱️','⏲️','⏰','🕰️','⌛','⏳','📡','🔋','🔌','💡','🔦','🕯️','🛢️','💸','💵','💴','💶','💷','💰','💳','💎','⚖️','🔧','🔨','⚒️','🛠️','⛏️','🔩','⚙️','🗜️','⚗️','🔬','🔭','📡','💉','💊','🚪','🛏️','🛋️','🚽','🚿','🛁','🛒','🚬','⚰️','⚱️','🏺','🔮','📿','💈','⚗️','🔭','🔬','🕳️','💊','💉','🗡️','⚔️','🔪','🏹','🛡️','🚬','⚰️','🗿','🔧','🔨','⚒️','🛠️','⛏️','🔩','⚙️','🗜️','⚗️','🔬','🔭','📡','💉','💊','🚪','🛏️','🛋️','🚽','🚿','🛁','🛒','🚬','⚰️','⚱️','🏺','🔮','📿','💈','⚗️','🔭','🔬','🕳️'],
    symbols: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕','🛑','⛔','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿','🅿️','🛗','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣'],
    flags: ['🏳️','🏴','🏁','🚩','🏳️‍🌈','🏳️‍⚧️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲'],
    // Add more categories as needed
};

let categories = Object.keys(emojiData);
let currentCategoryIndex = 0;

let draggedEmoji = null;
let draggedEmojiClone = null;
let currentDroppable = null;
let autoScrollInterval = null;

// Generate cloud elements
function generateClouds() {
    const cloudsContainer = document.querySelector('.clouds');
    for (let i = 0; i < 200; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.left = `${Math.random() * 200}%`;
        cloud.style.top = `${Math.random() * 100}%`;
        cloud.style.animationDuration = `${5 + Math.random() * 5}s`;
        cloudsContainer.appendChild(cloud);
    }
}

// Load emojis into the emoji grids
function loadEmojis(category) {
    const emojiGridLeft = document.getElementById('emoji-grid-left');
    const emojiGridRight = document.getElementById('emoji-grid-right');
    emojiGridLeft.innerHTML = '';
    emojiGridRight.innerHTML = '';
    const emojis = emojiData[category];

    const half = Math.ceil(emojis.length / 2);
    const leftEmojis = emojis.slice(0, half);
    const rightEmojis = emojis.slice(half);

    leftEmojis.forEach(emojiChar => {
        const emojiItem = createEmojiItem(emojiChar);
        emojiGridLeft.appendChild(emojiItem);
    });

    rightEmojis.forEach(emojiChar => {
        const emojiItem = createEmojiItem(emojiChar);
        emojiGridRight.appendChild(emojiItem);
    });

    // Update the category name display
    const categoryNameDisplay = document.getElementById('category-name');
    categoryNameDisplay.textContent = category.charAt(0).toUpperCase() + category.slice(1);
}

function createEmojiItem(emojiChar) {
    const emojiItem = document.createElement('div');
    emojiItem.classList.add('emoji-item');
    emojiItem.textContent = emojiChar;

    // Touch event listeners for drag-and-drop
    emojiItem.addEventListener('touchstart', handleDragStart, false);
    emojiItem.addEventListener('touchmove', handleDragMove, false);
    emojiItem.addEventListener('touchend', handleDragEnd, false);

    // Mouse event listeners for desktop
    emojiItem.addEventListener('mousedown', handleMouseDown, false);

    return emojiItem;
}

// Handle navigation between categories
function navigateCategory(direction) {
    if (direction === 'prev') {
        currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
    } else if (direction === 'next') {
        currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    }
    const newCategory = categories[currentCategoryIndex];
    loadEmojis(newCategory);
}

document.getElementById('prev-category').addEventListener('click', () => navigateCategory('prev'));
document.getElementById('next-category').addEventListener('click', () => navigateCategory('next'));

// Drag-and-drop handlers
function handleDragStart(e) {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Position the clone at the touch point
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Apply initial scale for animation
    draggedEmojiClone.style.transform = 'scale(1.2)';

    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function handleDragMove(e) {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Auto-scroll functionality
    const viewportHeight = window.innerHeight;
    const scrollThreshold = 50;

    if (touch.clientY < scrollThreshold) {
        startAutoScroll('up');
    } else if (touch.clientY > viewportHeight - scrollThreshold) {
        startAutoScroll('down');
    } else {
        stopAutoScroll();
    }

    // Get the element under the touch point
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (currentDroppable !== droppableBelow) {
        if (currentDroppable) {
            currentDroppable.classList.remove('highlight');
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
            currentDroppable.classList.add('highlight');
        }
    }
}

function handleDragEnd(e) {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    draggedEmojiClone.remove();
    draggedEmojiClone = null;

    // Stop any ongoing auto-scroll
    stopAutoScroll();

    if (currentDroppable) {
        currentDroppable.textContent = draggedEmoji.textContent;
        currentDroppable.classList.remove('highlight');

        // Check if all placeholders are filled in the morning sector
        if (currentDroppable.closest('#morning-sector')) {
            const placeholders = currentDroppable.closest('#morning-sector').querySelectorAll('.emoji-placeholder');
            const allFilled = Array.from(placeholders).every(placeholder => placeholder.textContent.trim() !== '');
            if (allFilled) {
                const checkButton = currentDroppable.closest('#morning-sector').querySelector('.check-button');
                checkButton.classList.add('checked');
            }
        }
    }

    draggedEmoji = null;
    currentDroppable = null;
}

function handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Position the clone at the mouse point
    updateDraggedEmojiPosition(e);

    // Apply initial scale for animation
    draggedEmojiClone.style.transform = 'scale(1.2)';

    // Mouse move and up handlers
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);
}

function handleMouseMove(e) {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    updateDraggedEmojiPosition(e);

    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (currentDroppable !== droppableBelow) {
        if (currentDroppable) {
            currentDroppable.classList.remove('highlight');
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
            currentDroppable.classList.add('highlight');
        }
    }
}

function handleMouseUp(e) {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    draggedEmojiClone.remove();
    draggedEmojiClone = null;

    if (currentDroppable) {
        currentDroppable.textContent = draggedEmoji.textContent;
        currentDroppable.classList.remove('highlight');

        // Check if all placeholders are filled in the morning sector
        if (currentDroppable.closest('#morning-sector')) {
            const placeholders = currentDroppable.closest('#morning-sector').querySelectorAll('.emoji-placeholder');
            const allFilled = Array.from(placeholders).every(placeholder => placeholder.textContent.trim() !== '');
            if (allFilled) {
                const checkButton = currentDroppable.closest('#morning-sector').querySelector('.check-button');
                checkButton.classList.add('checked');
            }
        }
    }

    draggedEmoji = null;
    currentDroppable = null;

    document.removeEventListener('mousemove', handleMouseMove, false);
    document.removeEventListener('mouseup', handleMouseUp, false);
}

// Update the position of the dragged emoji clone
function updateDraggedEmojiPosition(event) {
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    draggedEmojiClone.style.left = `${x + scrollLeft}px`;
    draggedEmojiClone.style.top = `${y + scrollTop}px`;
}

// Auto-scroll functions
function startAutoScroll(direction) {
    if (autoScrollInterval) return;

    autoScrollInterval = setInterval(() => {
        const scrollAmount = 20;
        if (direction === 'up') {
            window.scrollBy(0, -scrollAmount);
        } else if (direction === 'down') {
            window.scrollBy(0, scrollAmount);
        }
    }, 16);
}

function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

// Update live time
function updateLiveTime() {
    const liveTimeElement = document.getElementById('live-time');
    const now = new Date();
    liveTimeElement.textContent = now.toLocaleTimeString();
}

// Sector Check Buttons
const checkButtons = document.querySelectorAll('.check-button');
checkButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.sector !== 'morning') {
            button.classList.toggle('checked');
        }
    });
});

// Day Rating System
const ratingCircle = document.querySelector('.rating-circle');
const ratingButtons = document.querySelectorAll('.rating-button');

ratingCircle.addEventListener('click', () => {
    ratingCircle.style.display = 'none';
    ratingButtons.forEach(button => {
        button.style.display = 'block';
    });
});

ratingButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        ratingButtons.forEach((btn, idx) => {
            if (idx <= index) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
    });
});

// Reset Button Functionality
document.getElementById('reset-button').addEventListener('click', () => {
    // Clear emojis
    const placeholders = document.querySelectorAll('.emoji-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.textContent = '';
    });

    // Reset sector checks
    checkButtons.forEach(button => {
        button.classList.remove('checked');
    });

    // Reset day rating
    ratingButtons.forEach(button => {
        button.classList.remove('selected');
        button.style.display = 'none';
    });
    ratingCircle.style.display = 'flex';

    // Clear text inputs
    const textInputs = document.querySelectorAll('.custom-text-inputs input');
    textInputs.forEach(input => {
        input.value = '';
    });
});

// Initialize the app
function init() {
    // Generate clouds
    generateClouds();

    // Load default emoji category
    loadEmojis(categories[currentCategoryIndex]);

    // Update live time
    updateLiveTime();
    setInterval(updateLiveTime, 1000);
}

init();
