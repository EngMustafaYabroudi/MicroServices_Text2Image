<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
   /**
     * Register a new user.
     *
     * @param Request $request
     * @return Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'name'=>'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }
        $user = User::where('email', $request->email)->first();

        if ($user) {
            return response()->json([
                'error' => 'This email address is already in use.',
            ], 422);
        }
        $user = User::create($request->all());

        Auth::login($user);

        return response()->json([
            'token' => $user->createToken('api')->plainTextToken,
            'message' => 'User registered successfully.',
        ]);
    }

    /**
     * Login an existing user.
     *
     * @param Request $request
     * @return Response
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $token = Auth::user()->createToken('api')->plainTextToken;
            session()->put('token', $token);
            return response()->json([
                'success' => true,
                'token' => $token,
                'message' => 'User logged in successfully.',
            ]);
        }

        return response()->json([
            'error' => 'Invalid email or password.',
            'success' => false,
        ], 401);
    }

    /**
     * Logout the current user.
     *
     * @return Response
     */
    public function logout()
    {
        //session()->flush();
        $token = session()->get('token');
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out.','token'=>$token]);
    }

    /**
     * Refresh the current user's API token.
     *
     * @return Response
     */
    public function refresh()
    {
        $token = Auth::user()->createToken('api')->plainTextToken;

        return response()->json([
            'token' => $token,
        ]);
    }

    /**
     * Invalidate the current user's API token.
     *
     * @return Response
     */
    public function invalidate()
    {
        Auth::user()->tokens()->invalidate();

        return response()->json(['message' => 'Successfully invalidated token.']);
    }

    /**
     * Get the current user.
     *
     * @return Response
     */
    public function getAuthenticatedUser()
    {
        return response()->json(Auth::user());
    }

    /**
     * Get all of the current user's API tokens.
     *
     * @return Response
     */
    public function getAuthenticatedUserTokens()
    {
        return response()->json(Auth::user()->tokens);
    }

}


