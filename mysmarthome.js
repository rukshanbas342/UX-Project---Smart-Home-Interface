// MySmartHome Page Interactive Controls

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sliders
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        // Initialize slider track on load
        updateSliderTrack(slider);
        
        // Update on input
        slider.addEventListener('input', () => updateSliderTrack(slider));
    });
    
    // Temperature controls
    const tempDisplay = document.querySelector('.temperature-display');
    const tempPlus = document.querySelector('.temp-plus');
    const tempMinus = document.querySelector('.temp-minus');
    let temperature = 22;
    
    if (tempPlus && tempMinus && tempDisplay) {
        tempPlus.addEventListener('click', function() {
            if (temperature < 30) {
                temperature++;
                tempDisplay.textContent = temperature + '°';
            }
        });
        
        tempMinus.addEventListener('click', function() {
            if (temperature > 16) {
                temperature--;
                tempDisplay.textContent = temperature + '°';
            }
        });
    }
    
    // Music controls
    const playPauseBtn = document.querySelector('.play-pause');
    let isPlaying = false;
    
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            // Toggle play/pause icon would go here
            console.log('Play/Pause:', isPlaying ? 'Playing' : 'Paused');
        });
    }
});

// Update slider track fill to show active portion
function updateSliderTrack(slider) {
    const value = parseFloat(slider.value);
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    
    // Calculate percentage (0-100)
    const percentage = ((value - min) / (max - min)) * 100;
    
    // Update CSS variable for the active track
    // The active track should end at the center of the handle
    const wrapper = slider.closest('.slider-wrapper');
    if (wrapper) {
        // Account for handle width (4px) - center it at the handle position
        wrapper.style.setProperty('--slider-value', percentage);
    }
    
    // Update value display
    const valueDisplay = slider.nextElementSibling;
    if (valueDisplay && valueDisplay.classList.contains('slider-value')) {
        valueDisplay.textContent = Math.round(value);
    }
}

