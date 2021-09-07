@extends('_layouts.master')

@section('body')
    <section class="position-relative">
        <div class="container">

            <main class="content py-5">
                @yield('content')
            </main>


            <div class="position-absolute d-none d-lg-block start-0 bottom-0">
                <img src="/assets/img/left.svg">
            </div>
        </div>
    </section>
@endsection

