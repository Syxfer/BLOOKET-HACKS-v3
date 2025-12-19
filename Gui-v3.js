function runSecureGitHubScript() {
    const authorizedPasswords = ["syxfer89", "ATF5% - JJKKtr@2"];
    const userInput = prompt("Enter password to load remote script:");

 
    if (!userInput) {
        console.log("No password entered.");
        return;
    }


    if (authorizedPasswords.includes(userInput.trim())) {
        console.log("Password correct. Fetching script...");
        

        const script = document.createElement('script');
        
      
        script.src = "https://raw.githubusercontent.com/Syxfer/BLOOKET-HACKS-v3/refs/heads/main/gui-v2.js";
        
    
        script.onload = function() {
            console.log("Code ./ WFT14");
        };

        script.onerror = function() {
            console.error("Could not load the script. Check your URL or internet connection.");
        };
        document.head.appendChild(script);

    } else {
        alert("Unkown Error ./ Access Denied");
    }
}

runSecureGitHubScript();
