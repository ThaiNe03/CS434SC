@extends('layouts.app')
@section('content')

<div class="card card-primary">
  <div class="card-header">
    <h3 class="card-title">List User</h3>
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
  <div class="table table-responsive">
    <table class="table table-striped" id="myTable">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">UserName</th>
          <th scope="col">Password</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Phân quyền</th>
          <th scope="col">Cập nhật</th>
          <th scope="col">Manage</th>
        </tr>
      </thead>
      <tbody>
        @foreach($categories as $key => $cate)
        <tr>
          <th scope="row">{{$key}}</th>
          <td>{{$cate->userName}}</td>
          <td>{{$cate->password}}</td>
          <td>
            @if($cate->status==0)
            <span class="text text-success">Active</span>
            @else
            <span class="text text-success">Un Active</span>
            @endif
          </td>
          <td>
            @if($cate->divide==0)
            <span class="text">User</span>
            @elseif($cate->divide==1)
            <span class="text">Staff</span>
            @else
            <span class="text">Admin</span>
            @endif
          </td>
          <td>{{$cate->updated_at}}</td>
          <td>
            <a href="{{route('categories.edit',[$cate->id])}}" class="btn btn-warning">Edit</a>
            <form onsubmit="return confirm('Bạn có muốn xóa không?')" action="{{route('categories.destroy',[$cate->id])}}" method="POST">
              @method('DELETE')
              @csrf
              <input type="submit" class="btn btn-danger" value="Xóa">
            </form>
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </div>
</div>

@endsection
