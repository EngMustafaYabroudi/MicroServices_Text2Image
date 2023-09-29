@extends('layouts.app', ['page' => __('Product Edit'), 'pageSlug' => 'products'])

@section('content')
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="title">{{ __('Edit Product') }}</h5>
                </div>
                <form method="post" action="{{ route('pages.products.update',$product->id) }}" autocomplete="off">
                    <div class="card-body">
                            @csrf      
                            @method('POST')
                            @include('alerts.success')
                            <div class="form-group{{ $errors->has('title') ? ' has-danger' : '' }}">
                                <label>{{ __('Title') }}</label>
                                <input type="text" name="title" class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" placeholder="{{ __('Title') }}" value="{{ old('title', $product->title) }}">
                                @include('alerts.feedback', ['field' => 'title'])
                            </div>    
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-fill btn-primary">{{ __('Update') }}</button>
                    </div>
                </form>
            </div>

        </div>

    </div>
@endsection
