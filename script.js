const form = document.forms.namedItem("random-options");
const randomStringLength = form.querySelector("#string-length");
const charactersAllowed = form.querySelectorAll('[name="characters-allowed"]');
const resultBox = document.getElementById("result-section").querySelector('[type="text"]');

form.addEventListener("submit", (event) => 
{
    event.preventDefault();

    const stringLength = Number(randomStringLength.value);
    const choosedOptions = Array.from(charactersAllowed).filter(value => value.checked);

    try
    {
        if(stringLength === 0)
        {
            throw new Error("Length cannot be zero!");
        }
        else if(choosedOptions.length === 0)
        {
            throw new Error("Must choose at least one option!");
        }
        else if(choosedOptions.length !== 0 && stringLength > 0)
        {
            let stringForRandom = "";
            resultBox.value = "";

            choosedOptions.map(option => 
            {
                switch(option.value)
                {
                    case "digits":
                        stringForRandom += "0123456789";
                    break;
                    case "uppercase":
                        stringForRandom += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                    case "lowercase":
                        stringForRandom += "abcdefghijklmnopqrstuvwxyz";
                    break;
                }
            })
            
            for (let i = 0; i < stringLength; i++) 
            {
                const randomIndex = Math.floor(Math.random() * stringForRandom.length);
                
                resultBox.value += stringForRandom[randomIndex];
            }

        }
    }
    catch(e)
    {
        alert(e.message);
    }
});