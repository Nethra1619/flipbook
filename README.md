<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flip Book</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="flipbook">
        <div class="page" id="page1">"Wishing you a day filled with love and joy. Happy Birthday!"</div>
        <div class="page" id="page2">"May your birthday be the start of a year filled with good luck, good health, and much happiness."</div>
        <div class="page" id="page3">"Cheers to another year of success, health, and happiness. Happy Birthday!"</div>
        <div class="page" id="page4">"On your special day, I wish you a year filled with happiness and love. Happy Birthday!"</div>
        <div class="page" id="page5">"May your birthday be filled with sunshine, smiles, laughter, and love."</div>
        <div class="page" id="page6">"Another adventure-filled year awaits you. Happy Birthday!"</div>
        <div class="page" id="page7">"Wishing you a day that is as special in every way as you are. Happy Birthday!"</div>
        <div class="page" id="page8">"Sending you smiles for every moment of your special day. Have a wonderful time and a very Happy Birthday!"</div>
        <div class="page" id="page9">"Hope your special day brings you all that your heart desires! Happy Birthday!"</div>
        <div class="page" id="page10">"Wishing you a beautiful day with good health and happiness forever. Happy Birthday!"</div>
    </div>
    <button id="prevBtn">Previous</button>
    <button id="nextBtn">Next</button>

    <script src="script.js"></script>
</body>
</html>


<style>body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
    font-family: Arial, sans-serif;
}

.flipbook {
    width: 300px;
    height: 400px;
    position: relative;
    perspective: 1000px;
}

.page {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: left;
    transition: transform 0.6s ease;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.page:nth-child(2) {
    transform: rotateY(180deg);
}

.page:nth-child(3) {
    transform: rotateY(180deg);
}

.page:nth-child(4) {
    transform: rotateY(180deg);
}

.page:nth-child(5) {
    transform: rotateY(180deg);
}

.page:nth-child(6) {
    transform: rotateY(180deg);
}

.page:nth-child(7) {
    transform: rotateY(180deg);
}

.page:nth-child(8) {
    transform: rotateY(180deg);
}

.page:nth-child(9) {
    transform: rotateY(180deg);
}

.page:nth-child(10) {
    transform: rotateY(180deg);
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#prevBtn {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
}

#nextBtn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
</style>

<script>const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].style.transform = 'rotateY(0deg)';
    }
});
</script>
