let img;
let img2;

function preload() {
  img = loadImage('water_stateOfPlay.jpg');
  img2 = loadImage('download (2).png');

}



function setup() {
  createCanvas(2000, 1200);
}

function draw() {
  background(255, 255, 242);
  image(img, 1000, 175, 650, 500);
  image(img2, 1000, 620, 650, 300);

  fill(85, 118, 185);
  //title and subtitle
  textFont("Impact", 50);
  text("'Not everyone has access to clean water and sanitation.'", 430, 70);
  text(" ｡｡･:*˚✧｡Let's talk about it. ｡｡･:*˚:✧｡", 600, 130);

  //box
  fill(85, 118, 185);
  stroke(45, 52, 78);
  strokeWeight(7);
  rect(430, 200, 470, 350);

  //text with box
  noStroke();
  fill(255);
  textFont("times new roman", 25);
  text("' There are 700 million people on this planet ", 439, 240);
  text("  without access to clean drinking water and ", 439, 270);
  text("and if we don’t start making big changes,", 452, 300);
  text(" that number is only going to increase.", 459, 330);
  text("Water is increasingly becoming a precious", 449, 360);
  text("resource and it’s going to take a combination", 439, 390);
  text("of effort and innovation to reverse the trend. '", 439, 420);
  textFont("Arial Black");
  fill(45, 52, 78);
  text("From Sonya Korshenboym", 479, 480);
  text("https://qz.com/guide/water/", 479, 510);

  //text in bottom left
  fill(85, 118, 185);
  textSize(185);
  textFont("impact");
  text("1 in 3", 410, 1030);

  //text under bottom left  
  textSize(25);
  fill(85, 118, 185);
  textFont("arial black", 35);
  text("People globally do not have", 370, 1109);
  text("Access to safe drinking water.", 360, 1150);

  //rectangles on both sides
  fill(44, 51, 77);
  rect(0, 0, 200, 1500);
  rect(1800, 0, 200, 1500);

  //my name in the corner
  fill(255, 255, 242);
  textFont("impact", 35);
  text("Ayan Derie", 25, 40);


  //title of causes of water scarcity
  fill(43, 50, 76);
  textFont("impact", 35);
  text("Major Causes Of Water Scarcity:", 420, 630);

  //causes of water scarcity
  textFont("times new roman", 30);
  fill(85, 118, 185);
  text("• Climate change", 420, 670);
  text("• Overuse and wastage of water", 420, 710);
  text("• Increased human consumption", 420, 750);
  text("• Droughts and floods.", 420, 790);
  text("• Increased pollution", 420, 830);

  //title for solutions for water scarcity
  fill(43, 50, 76);
  textFont("impact", 35);
  text("Solutions for Water Scarcity:", 980, 970);

  //solutions for water scarcity
  fill(87, 120, 187);
  textFont("times new roman", 30);
  text("• We should recycle wastewater", 980, 1015);
  text("• New Conservation Technologies", 980, 1055);
  text("• More Education and Awareness about water scarcity", 980, 1095);
  text("• Appropriately price water", 980, 1130);
  text("• Developing water filtration systems to make water safe to drink", 980, 1170);
}
