        // More API functions here:
        // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

        // the link to your model provided by Teachable Machine export panel
        const URL = "https://teachablemachine.withgoogle.com/models/459TuPpDI/";


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
            if (big_obj.className == "꼬부기") {
                char.src = "ggobuk.png"
                labelContainer.innerHTML = `
                    <h2>닮은 캐릭터는 <span class="important_char">'꼬부기'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'마조리카'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'심바'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'웅이'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'이간질 요괴'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'펭수'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'하울'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'고양이의보은 고양이'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'맹구'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'뮬란'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'백설공주'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'세일러문 우라노스'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'인어공주'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'주디'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'네오'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'버즈'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'프로도'</span> 입니다!</h2>
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
                    <h2>닮은 캐릭터는 <span class="important_char">'피카츄'</span> 입니다!</h2>
                `
                char_description.innerHTML = `
                    <li><span>카리스마</span><img class="star" src="star.png"></li>
                    <li><span>귀여움</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                    <li><span>섬세함</span><img class="star" src="star.png"></li>
                    <li><span>독특함</span><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"><img class="star" src="star.png"></li>
                `
            }
        }