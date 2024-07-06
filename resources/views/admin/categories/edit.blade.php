@extends('layouts.app')
@section('content')

<div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Edit User</h3>
              </div>
              @if ($errors->any())
                <div class="alert alert-danger">
                  <ul>
                  @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                  @endforeach
                  </ul>
                </div>
              @endif
              <!-- /.card-header -->
              <!-- form start -->
              <form method="POST" action="{{route('categories.update',[$category->id])}}" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input type="text" class="form-control" value="{{$category->userName}}" name="userName" id="exampleInputEmail1" placeholder="---">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" class="form-control" value="{{$category->password}}" name="password" id="exampleInputPassword1" placeholder="---">
                  </div>
                  <div class="form-check">
                    <input type="checkbox" value="0" {{$category->status==0? 'checked' : ''}} name="status" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Hoạt động</label>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" value="0" {{$category->divide==0? 'checked' : ''}} name="divide" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">User</label>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Chỉnh sửa</button>
                </div>
              </form>
            </div>

@endsection
