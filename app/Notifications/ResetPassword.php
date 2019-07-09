<?php

namespace App\Notifications;

use Illuminate\Support\Facades\Lang;
use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Notifications\Messages\MailMessage;

class ResetPassword extends ResetPasswordNotification
{
  /**
   * Build the mail representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return \Illuminate\Notifications\Messages\MailMessage
   */
  public function toMail($notifiable)
  {
    if (static::$toMailCallback) {
      return call_user_func(static::$toMailCallback, $notifiable, $this->token);
    }

    return (new MailMessage)
      ->markdown('emails.passwords.reset', ['token' => $this->token, 'count' => config('auth.passwords.users.expire')])
      ->subject(Lang::getFromJson('パスワードリセットのお知らせ'));
  }
}
