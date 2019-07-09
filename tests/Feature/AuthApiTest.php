<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthApiTest extends TestCase
{
  use RefreshDatabase;

  public function setUp(): void
  {
    parent::setUp();

    // テストユーザー作成
    $this->user = factory(User::class)->create();
  }

  /**
   * @test
   */
  public function should_新しいユーザーを作成して返却する()
  {
    $data = [
      'name' => 'vuesplash user',
      'email' => 'dummy@email.com',
      'password' => 'test1234',
      'password_confirmation' => 'test1234'
    ];

    $response = $this->json('POST', route('register'), $data);

    $user = User::find(2);
    $this->assertEquals($data['name'], $user->name);

    $response
      ->assertStatus(201)
      ->assertJson(['name' => $user->name]);
  }

  /**
   * @test
   */
  public function should_登録済みのユーザーを認証して返却する()
  {
    $response = $this->json('POST', route('login'), [
      'email' => $this->user->email,
      'password' => 'password'
    ]);

    $response
      ->assertStatus(200)
      ->assertJson(['name' => $this->user->name]);

    $this->assertAuthenticatedAs($this->user);
  }

  /**
   * @test
   */
  public function should_認証済みのユーザーをログアウトさせる()
  {
    $response = $this->actingAs($this->user)
      ->json('POST', route('logout'));

    $response->assertStatus(200);
    $this->assertGuest();
  }

  /**
   * @test
   */
  public function should_パスワードリセットメールを送信する()
  {
    $email = $this->user->email;

    $this
      ->json('POST', route('password_forget.email'), ['email' => $email])
      ->assertStatus(200)
      ->assertExactJson([
        'message' => 'パスワードリセットの確認メールを送信しました。',
        'status' => true
      ]);

    $this
      ->json('POST', route('password_forget.email'), ['email' => 'hogehoge@hoge.com'])
      ->assertStatus(400);
  }
}
