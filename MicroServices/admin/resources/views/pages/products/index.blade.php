@extends('layouts.app', ['page' => __('Products'), 'pageSlug' => 'products'])

@section('content')
<div class="row">
  <div class="col-md-12">
    <div class="card ">
      <div class="card-header">
        <h4 class="card-title"> Simple Table</h4>   
        <!-- Button trigger modal -->
        <div class="float-right">
          <button type="button" class="btn " data-toggle="modal" data-target="#create-product-modal"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table tablesorter " id="">
            <thead class=" text-primary">
              <tr>
                <th>
                  image
                </th>
                <th>
                  Title
                </th>
                <th>
                  Action
                </th>
              
              </tr>
            </thead>
            <tbody>
              @foreach ($products as $product)
              <tr>
                <td>
                  <img src="{{ $product->image }}" alt="{{ $product->title }}" width="200px" height="200"  />
                </td>
                <td>
                  {{ $product->title }} 
                </td>
                <th> 
                  <a href="{{ route('pages.products.edit',$product->id) }}" class="btn btn-primary" data-toggle="modal" data-target="#edit-product-modal" ><i class="fas fa-edit"></i></a>
                  <a href="{{ route('pages.products.delete', $product->id) }}" method="DELETE" class="btn btn-danger" data-toggle="modal" data-target="#delete-product-modal"><i class="fas fa-trash-alt"></i></a>
              </th>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal Delete Product-->
<div class="modal fade" id="delete-product-modal" tabindex="-1" aria-labelledby="delete-product-modal-label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="delete-product-modal-label">Delete Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to delete this product?{{$product->id}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <a href="{{ route('pages.products.delete', $product->id) }}" method="DELETE" class="btn btn-danger">Delete</a>
      </div>
    </div>
  </div>
</div>

<!-- Modal Create Product-->
<div class="modal fade" id="create-product-modal" tabindex="-1" aria-labelledby="create-product-modal-label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="create-product-modal-label">Create Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="{{ route('pages.products.store') }}" method="POST">
          @csrf

          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" style="color: black" id="title" class="form-control">
          </div>

          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" name="image" id="image" class="form-control" >
            <span class="help-block"><i class="far fa-folder-open"></i> قم بتحميل صورة لمنتجك</span>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Modal Edit Product-->
<div class="modal fade" id="edit-product-modal" tabindex="-1" aria-labelledby="edit-product-modal-label" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="edit-product-modal-label">Edit Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="{{ route('pages.products.update', $product->id) }}" method="POST">
          @csrf      
          @method('POST')
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" style="color: black" class="form-control" value="{{ old('title', $product->title) }}">
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" style="color: black" name="image" id="image" class="form-control">
            <div>
              <img src="{{ $product->image }}" alt="{{ $product->title }}" width="200px" height="200"  />
            </div>
              
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

@endsection
