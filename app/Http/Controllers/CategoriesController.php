<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('id','DESC')->get();
        return view('admin.categories.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.categories.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'userName' => 'required|unique:categories|max:200',
            'password' => 'required|max:200',
            'status' => 'required',
            'divide' => 'required',
        ]
        );
        $category = new Category();
        $category->userName = $data['userName'];
        $category->password = $data['password'];
        $category->status = $data['status'];
        $category->divide = $data['divide'];

        $category->save();
        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::find($id);
        return view('admin.categories.edit',compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            'userName' => 'required|unique:categories|max:200',
            'password' => 'required|max:200',
            'status' => 'required',
            'divide' => 'required',
        ]
        );
        $category = Category::find($id);
        $category->userName = $data['userName'];
        $category->password = $data['password'];
        $category->status = $data['status'];
        $category->divide = $data['divide'];

        $category->save();
        return redirect()->route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categories = Category::find($id);
        $categories->delete();
        return redirect()->route('categories.index');
    }
}
