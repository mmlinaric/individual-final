<?php
$title = "Contact us";

include("core/functions/database.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $full_name = htmlspecialchars($_POST['full_name'], ENT_QUOTES);
    $email = htmlspecialchars($_POST['email'], ENT_QUOTES);
    $contact_body = htmlspecialchars($_POST['contact_body'], ENT_QUOTES);

    // Check full name
    if (empty($full_name)) {
        die('Full name cannot be empty');
    }

    if (strlen($full_name) > 50) {
        die('Full name is too long');
    }

    // Check email name
    if (empty($email)) {
        die('Email cannot be empty');
    }

    if (strlen($email) > 50) {
        die('Email is too long');
    }

    // Check contact body
    if (empty($contact_body)) {
        die('Contact body cannot be empty');
    }

    if (strlen($contact_body) > 500) {
        die('Contact body is too long');
    }

    $stmt = $conn->prepare("INSERT INTO contacts(full_name, email, contact_body) VALUES (:full_name, :email, :contact_body)");
    $stmt->execute(array(
        'full_name' => $full_name,
        'email' => $email,
        'contact_body' => $contact_body
    ));

    die("You have successfully contacted us. <a href=\"contact.php\">Go back</a>");
}

include("core/tpl/header.php");
?>

<div class="contact-form">
    <?php if (isset($contact_body)): ?>
        <p>Your contact has been saved successfully.</p>
    <?php endif; ?>

    <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="full_name">Full name:</label>
        <input type="text" id="full_name" name="full_name" placeholder="Full name" required min="3" max="50">
        <label for="email">Email:</label>
        <input type="email" id="full_name" name="email" placeholder="Email" required min="3" max="50">
        <label for="message">Message:</label>
        <textarea id="contact_body" name="contact_body" placeholder="Message" rows="10" required minlength="3" maxlength="500"></textarea>

        <input type="submit" value="Contact">
    </form>
</div>

<script src="js/formValidator.js"></script>

<?php include("core/tpl/footer.php"); ?>