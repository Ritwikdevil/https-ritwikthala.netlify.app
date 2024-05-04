document.addEventListener('contextmenu', event => event.preventDefault());

    // Prevent keyboard shortcuts
    document.onkeydown = function(e) {
        if (
            (e.keyCode == 123) || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0))) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0))) || // Ctrl+Shift+J
            (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0))) || // Ctrl+Shift+C
            (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0))) || // Ctrl+U
            (e.ctrlKey && (e.keyCode == 'V'.charCodeAt(0))) || // Ctrl+V
            (e.ctrlKey && (e.keyCode == 'C'.charCodeAt(0))) // Ctrl+C
        ) {
            return false;
        }
    };