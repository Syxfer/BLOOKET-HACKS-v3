function startSecureProcess() {
    const authorizedPasswords = ["syxfer89", "ATF5% - JJKKtr@2"];
    let accessGranted = false;

    // Use a while loop to keep asking until they get it right or hit cancel
    while (!accessGranted) {
        const userInput = prompt("Please enter the password to continue:");

        // 1. Check if user hit "Cancel" (userInput will be null)
        if (userInput === null) {
            console.log("Process cancelled by user.");
            break; // Exit the loop entirely
        }

        // 2. Check if user left it blank
        if (userInput.trim() === "") {
            alert("Password cannot be empty. Please try again.");
            continue; // Skip the rest and ask again
        }

        // 3. Validate the password
        if (authorizedPasswords.includes(userInput.trim())) {
            accessGranted = true;
            alert("Access Granted! Loading script...");
            loadMyGitHubScript();
        } else {
            alert("Incorrect password. Access Denied.");
            // Loop will run again to give another chance
        }
    }
}

function loadMyGitHubScript() {
    console.log("Fetching script from GitHub...");
    const script = document.createElement('script');
    
    // REPLACE this with your RAW GitHub URL
    script.src = "https://raw.githubusercontent.com/Syxfer/BLOOKET-HACKS-v3/refs/heads/main/gui-v2.js";
    
    script.onload = () => console.log("External script is now running!");
    script.onerror = () => alert("Error: Could not load the script from GitHub.");
    
    document.head.appendChild(script);
}

// Trigger the function
startSecureProcess();
