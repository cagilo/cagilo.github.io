@extends('_layouts.master')

@section('body')

    <section class="position-relative">
        <div class="container">

            <div class="my-md-5 pb-md-5 text-center">
                <img class="d-block mx-auto mb-2" src="/assets/logo/logo_gradient_nobackground.svg"
                     alt="Cagilo UI"
                     height="250">

                <h1 class="display-5 fw-bold">Cagilo</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">
                        A set of open-source <strong>Blade</strong> components for the <strong>Laravel
                                                                                               Framework</strong>
                    </p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="/docs/installation" class="btn btn-primary btn-lg">
                            Get started
                        </a>
                    </div>
                </div>
            </div>


            <div class="position-absolute d-none d-lg-block start-0 bottom-0">
                <img src="/assets/img/left.svg">
            </div>
        </div>
    </section>

    <section class="position-relative">
        <div class="container">
            <h2 class="display-5 fw-bold text-center my-5 pt-5">The Convenience You Love</h2>

            <div class="row g-5 row-cols-1 row-cols-lg-3 my-md-5 text-center">
                <div class="feature col">
                    <div class="icon-square bg-light text-dark flex-shrink-0 mb-3 d-inline-block">
                        <img src="/assets/img/free.svg" style="height: 4em">
                    </div>
                    <h2 class="my-3">Without Obesity</h2>
                    <p>
                        Don't require a framework for frontend or CSS/JS resources.
                    </p>
                </div>
                <div class="feature col">
                    <div class="icon-square bg-light text-dark flex-shrink-0 mb-3 d-inline-block">
                        <img src="/assets/img/file.svg" style="height: 4em">
                    </div>
                    <h2 class="my-3">Laravel Blade</h2>
                    <p>
                        Components with the expected elegance for any project.
                    </p>
                </div>
                <div class="feature col">
                    <div class="icon-square bg-light text-dark flex-shrink-0 mb-3 d-inline-block">
                        <img src="/assets/img/keyboard.svg" style="height: 4em">
                    </div>
                    <h2 class="my-3">Open Source</h2>
                    <p>
                        Free and Open Source for personal and commercial purposes.
                    </p>
                </div>
            </div>
        </div>

        <div class="position-absolute d-none d-lg-block end-0 bottom-0">
            <img src="/assets/img/right.svg">
        </div>
    </section>

    {{--
    <section class="position-relative">
        <div class="container">
            <div class="alert border-0 shadow-lg p-5 rounded my-5" role="alert"
                 style="background: rgba(116, 206, 192, 0.1);">

                <h3 class="fw-bold text-center mb-4">Lorem ipsum</h3>

                <div class="row g-4">
                    <div class="col-lg-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien, netus a purus ultrices.
                        Velit purus duis sit nec at sagittis.

                        Dui in vitae sodales est mattis aliquam. Id turpis lorem mauris ac porttitor lorem.

                    </div>
                    <div class="col-lg-6">

                        <div class="h-100">
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your
                               content. Be sure to look under the hood at the source HTML here as we've adjusted the
                               alignment and sizing of both column's content for equal-height.</p>
                            <a href="#">Example button</a>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>
    --}}

@endsection
