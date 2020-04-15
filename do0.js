        // More API functions here:
        // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

        // the link to your model provided by Teachable Machine export panel
        const URL = "https://teachablemachine.withgoogle.com/models/oXb149Ke5/";

        let model, webcam, labelContainer, maxPredictions;

        // Load the image model and setup the webcam
        async function init() {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // or files from your local hard drive
            // Note: the pose library adds "tmImage" object to your window (window.tmImage)
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();
            labelContainer = document.getElementById("label-container");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                labelContainer.appendChild(document.createElement("div"));
            }
        }

        // run the webcam image through the image model
        async function predict() {
            // predict can take in an image, video or canvas html element
            var image = document.getElementById("face-image")
            const prediction = await model.predict(image, false);
            console.log(prediction)
            let big = prediction[0].probability
            let big_obj = prediction[0]
            let temp = 0;
            for (const x of prediction) {
                if (x.probability > big) {
                    big = x.probability
                    big_obj = x
                }
            }
            let loader = document.querySelector(".loader")
            loader.classList.add("loader_off")
            const char = document.querySelector(".char")
            char.classList.remove("loader_off")
            console.log(big_obj)
            if (big_obj.className == "꼬부기") {
                char.src = "ggobuk.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '꼬부기' 입니다!</h2>
                `
            } else if (big_obj.className == "마조리카") {
                char.src = "majorika.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '마조리카' 입니다!</h2>
                `
            } else if (big_obj.className == "심바") {
                char.src = "simba.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '심바' 입니다!</h2>
                `
            } else if (big_obj.className == "웅이") {
                char.src = "ung.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '웅이' 입니다!</h2>
                `
            } else if (big_obj.className == "요괴") {
                char.src = "iganzil.jpg"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '이간질 요괴' 입니다!</h2>
                `
            } else if (big_obj.className == "토마스") {
                char.src = "thomas.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '토마스' 입니다!</h2>
                `
            } else if (big_obj.className == "펭수") {
                char.src = "peng.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '펭수' 입니다!</h2>
                `
            } else if (big_obj.className == "하울") {
                char.src = "howl.JPG"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '하울' 입니다!</h2>
                `
            }


        }