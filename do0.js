        // More API functions here:
        // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

        // the link to your model provided by Teachable Machine export panel
        const URL = "https://teachablemachine.withgoogle.com/models/vREOa4J5k/";


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
            const char_box = document.querySelector(".char_box")
            const char_description = document.querySelector(".char_description")
            char_box.classList.remove("loader_off")
            char_box.classList.add("char_box_loading")
            console.log(big_obj)
            if (big_obj.className == "꼬부기") {
                char.src = "ggobuk.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '꼬부기' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "마조리카") {
                char.src = "majorika.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '마조리카' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "심바") {
                char.src = "simba.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '심바' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "웅이") {
                char.src = "ung.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '웅이' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "이간질요괴") {
                char.src = "iganzil.jpg"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '이간질 요괴' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "펭수") {
                char.src = "peng.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '펭수' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "하울") {
                char.src = "howl.JPG"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '하울' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "고양이보은 고양이") {
                char.src = "cat.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '고양이의보은 고양이' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "맹구") {
                char.src = "mangu.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '맹구' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "뮬란") {
                char.src = "mulan.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '뮬란' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "백설공주") {
                char.src = "apple.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '백설공주' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "세일러문 우라노스") {
                char.src = "uranos.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '세일러문 우라노스' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "인어공주") {
                char.src = "mermaid.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '인어공주' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "주디") {
                char.src = "judy.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '주디' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "네오") {
                char.src = "neo.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '네오' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "버즈") {
                char.src = "buzz.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '버즈' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "프로도") {
                char.src = "prodo.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '프로도' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"></li>
                `
            } else if (big_obj.className == "피카츄") {
                char.src = "pikachu.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 '피카츄' 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            }
        }