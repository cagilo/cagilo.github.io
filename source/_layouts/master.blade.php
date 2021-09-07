<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="{{ $page->description ?? $page->siteDescription }}">

    <meta property="og:site_name" content="{{ $page->siteName }}"/>
    <meta property="og:title" content="{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}"/>
    <meta property="og:description" content="{{ $page->description ?? $page->siteDescription }}"/>
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:image" content="/assets/img/logo.png"/>
    <meta property="og:type" content="website"/>

    <link rel="canonical" href="{{ $page->getUrl() }}">

    <meta name="twitter:image:alt" content="{{ $page->siteName }}">
    <meta name="twitter:card" content="summary_large_image">

    @if ($page->docsearchApiKey && $page->docsearchIndexName)
        <meta name="generator" content="tighten_jigsaw_doc">
    @endif

    <title>{{ $page->title ? $page->title . ' | '  : '' }}{{ $page->siteName }}</title>

    <link rel="home" href="{{ $page->baseUrl }}">
    <link rel="icon" href="/favicon.ico">

    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicon/site.webmanifest">
    <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="theme-color" content="#ffffff">

    @stack('meta')

    @if ($page->production)
    <!-- Insert analytics code here -->
    @endif

    <link rel="stylesheet" href="{{ mix('css/app.css', 'assets/build') }}">
</head>


<body class="d-flex flex-column h-100">


<section class="position-relative">
    <div class="container">
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills fw-bolder">
                @foreach($page->navigation as $name => $url)
                    <li class="nav-item mx-auto">
                        <a href="{{ $url }}" class="nav-link link-secondary {{ $page->isActive($url) ? 'text-gradient' : '' }}">
                            {{ $name }}
                        </a>
                    </li>
                @endforeach
            </ul>
        </header>
    </div>

    <div class="position-absolute d-none d-lg-block d-none d-lg-block end-0 top-0">
        <img src="/assets/img/top.svg">
    </div>
</section>


@yield('body')


<footer class="footer mt-auto py-3">
    <div class="container">

        <div class="d-flex align-items-center mb-3">
            <a href="https://github.com/cagilo/cagilo" target="_blank" class="d-inline-block mx-auto">
                <img src="/assets/img/github.svg">
            </a>
        </div>

        <p class="text-center text-secondary fw-bolder">
            © 2021 <span class="text-gradient">Cagilo</span> by <span class="text-gradient">Alexandr Chernyaev</span>
        </p>
    </div>
</footer>


@stack('scripts')
<script src="{{ mix('js/main.js', 'assets/build') }}"></script>
</body>

</html>
