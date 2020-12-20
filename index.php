<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- <link rel="stylesheet" href="https://keigo-yoshida-vov.github.io/Portfolio/css/style.css"> -->
    <link rel="stylesheet" href="css/menu.css">
    <!-- <link rel="stylesheet" href="https://keigo-yoshida-vov.github.io/Portfolio/css/menu.css"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
        $(function(){
            $('.btn-trigger').on('click', function() {
                $(this).toggleClass('active');
                return false;
            });
        });
    </script>
</head>
<body>
    <main>
        <header>
            <div id="header_logo">
                <p id="title">Keigo Yoshida</p>
            </div>
            <div class="content">
                <section>
                    <div class="btn-trigger" id="btn19">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                </section>
            </div>
        </header>
    </main>
</body>
</html>