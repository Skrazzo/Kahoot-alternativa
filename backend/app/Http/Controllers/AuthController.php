<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Log the user in
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    function login(Request $request){
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
    
        if (!Auth::attempt($request->only('username', 'password'))) {
            return response()->json([
                'success' => false,
                'message' => 'The provided credentials are incorrect'
            ], 401);
        }
    
        return response()->json([
            'success' => true,
            'message' => 'Logged in successfully',
            'user' => Auth::user()
        ]);
    }
}
