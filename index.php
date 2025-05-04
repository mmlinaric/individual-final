<?php
$title = "Home page";
define('NO_DISPLAY_HEADER', true);
include("core/tpl/header.php");
?>

<section class="banner">
    <h1>Explore Zagreb</h1>
    <p>Discover the heart of Croatia</p>
</section>

<div class="container">
    <div id="welcome" class="hero-section">
        <h2>Welcome to Zagreb: Croatia's Captivating Capital</h2>
        <img class="hero-img-left" src="img/zagreb.jpg" alt="zagreb">
        <p>Zagreb, the vibrant capital of Croatia, is a city where history and modernity blend seamlessly, creating a unique and captivating atmosphere. With its charming medieval core, visitors can wander through cobblestone streets lined with historic buildings, while the city's impressive architecture showcases a mix of Gothic, Baroque, and contemporary influences. Beyond its visual appeal, Zagreb boasts a rich cultural scene, featuring an array of museums, galleries, theaters, and bustling cafés that offer an authentic European experience. Unlike Croatia’s coastal destinations, the city provides a more relaxed yet equally engaging setting, allowing visitors to explore its many attractions at their own pace.</p>
    </div>

    <div class="hero-section">
        <h2>Historical Heart</h2>
        <img class="hero-img-right" src="img/kaptol.jpeg" alt="kaptol">
        <p>Zagreb's fascinating story begins in the medieval period with two distinct settlements perched on neighboring hills: the ecclesiastical Kaptol dominated by clergy, and the secular Gradec (Upper Town) populated by craftsmen and merchants, whose eventual unification in 1850 formed the foundation of the modern city we admire today. The first written mention of Zagreb dates back to 1094 when Hungarian King Ladislav established the Kaptol diocese, marking the beginning of a rich historical narrative that would see the settlement grow from a modest religious center to the sophisticated capital that now serves as Croatia's political, economic, and cultural nucleus. After surviving the devastating Mongol invasions of the 13th century, Gradec received the prestigious Golden Bull of 1242 from King Béla IV, granting citizens remarkable autonomy and establishing Zagreb as an important regional center whose influence would continue to grow throughout the centuries.</p>
    </div>

    <div class="hero-section">
        <h2>Architectural Treasures</h2>
        <img class="hero-img-left" src="img/cathedral.jpg" alt="cathedral">
        <p><span class="bold">Zagreb Cathedral</span> dominates the city skyline with its impressive neo-Gothic twin spires reaching 105 meters, making it the tallest building in Croatia. Originally dating to the 13th century, the cathedral was rebuilt in its current style following the devastating 1880 earthquake.</p>
        <p><span class="bold">St. Mark's Church</span> stands as one of Zagreb's most recognizable symbols with its colorful tiled roof displaying the medieval coat of arms of Croatia, Dalmatia and Slavonia on the left, and Zagreb's emblem on the right.</p>
        <p><span class="bold">The Stone Gate (Kamenita Vrata)</span> is one of Zagreb's most significant religious sites. Built between the 13th century, it houses a painting of the Virgin Mary that miraculously survived a fire in 1731.</p>
    </div>

    <div class="hero-section">
        <h2>Cultural Hub</h2>
        <img class="hero-img-right" src="img/art-pavilion.jpeg" alt="art pavilion">
        <p>Zagreb boasts an impressive array of museums and galleries. The <span class="bold">Art Pavilion</span> in the picturesque Tomislavov Park showcases contemporary and modern art in changing exhibitions. For something truly unique, visit the Museum of Broken Relationships, a one-of-a-kind cultural institution.</p>
        <p><span class="bold">The magnificent Croatian National Theater</span>, designed by Viennese architects Ferdinand Fellner and Hermann Helmer, hosts theater, ballet, and opera performances in its beautiful historic building.</p>
    </div>

    <div class="hero-section">
        <h2>Green Oases</h2>
        <img class="hero-img-left" src="img/botanical.jpg" alt="botanical gardens">
        <p>Despite being a bustling capital, Zagreb takes pride in its abundant green spaces. Maksimir Park, founded in 1787, is the oldest and largest park in Southern Europe spanning 316 hectares. The park features historical buildings, several ponds, and even the Zagreb Zoo.</p>
        <p><span class="bold">The Botanical Gardens</span> near the Art Pavilion contain one of Europe's most splendid plant collections with approximately 10,000 varieties.</p>
    </div>
</div>
<?php include("core/tpl/footer.php"); ?>