import 'dart:convert';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/services.dart';
import 'package:googleapis_auth/auth.dart';
import 'package:googleapis_auth/auth_io.dart';
import 'package:dio/dio.dart' as diop;

/// pubspec.yaml
/// googleapis_auth: any
/// googleapis: ^0.56.1
/// dio: ^3.0.10
/// firebase_messaging: ^7.0.3

MapEntry<String, dynamic> _notificationType(final String type, {String? token, final String? topic, final String? condition}) {
  if (type == 'token')
    return MapEntry<String, String>('token', token!);
  else if (type == 'topic')
    return MapEntry<String, String>('topic', topic!);
  return MapEntry<String, String>('condition', condition!);
}

MapEntry<String, dynamic> _notification(String _title, String _body) {
  Map<String, String> notification = {
    'title': _title,
    'body': _body,
  };
  return MapEntry('notification', notification);
}

MapEntry<String, dynamic> _data(String _id, String _status) {
  Map<String, String> data = {
    'id': _id,
    'status': _status,
  };
  return MapEntry('data', data);
}

String ?getDeviceToken() {
  final FirebaseMessaging _firebaseMessaging = FirebaseMessaging();

  _firebaseMessaging.getToken().then((String deviceToken) {
    return deviceToken;
  }).catchError((e) => print('error: $e '));
  return null;
}

Map<String, dynamic> _buildPayload() {
  final String DEVICE_TOKEN = getDeviceToken()!;
  /// your device token should be something like:
  'c-ZjF9ihQAKWQdjKsmbQaR:APA91bGTRGz78Pn3fsX7_1lqJ9fepVrfXbba9oFrErcafG6veYkbpLPw_WjNytW0d3IV8XFvwK3VO3GUqCxsGcJ1Zp9vkfOfNQooEO1oSQ72I_ce3Ev8AeBe92qV11NFw5gbZPe4Nhgv';
  //const String topic = 'product';
  //const String condition = 'my condition';
  final MapEntry<String, dynamic> notificationType = _notificationType('token', token: DEVICE_TOKEN);
  final MapEntry<String, dynamic> notification =
  _notification('title', 'My notification message body');
  final MapEntry<String, dynamic> data = _data('5', 'available');
  Map<String, dynamic> message = new Map<String, dynamic>();
  message.addEntries([notificationType, notification, data]);
  final Map<String, dynamic> _payload = {"message": message};

  return _payload;
}


Future<AccessToken> _requestAccessToken() async {
  final jsonFile = await rootBundle
      .loadString('assets/credentials/serviceAccountKey.json');
  final dynamic googleServices = json.decode(jsonFile);
  final _credentials = new ServiceAccountCredentials.fromJson(googleServices);
  const _SCOPES = [
    'https://www.googleapis.com/auth/firebase.messaging'
  ];

  AuthClient client = await clientViaServiceAccount(_credentials, _SCOPES);
  AccessToken accessToken = client.credentials.accessToken;
  return accessToken;
}

void _notificationBroadcast() async {
  final _payload = _buildPayload();
  const String FIREBASE_PROJECT_NAME = 'shopstreet-eeae1';
  const String SERVER_ENDPOINT_URL =
      'https://fcm.googleapis.com/v1/projects/$FIREBASE_PROJECT_NAME/messages:send';

  await _requestAccessToken().then((accessToken) {
    if (accessToken != null) {
      diop.Dio()
          .post(SERVER_ENDPOINT_URL,
          data: _payload,
          options: diop.Options(
            contentType: 'application/json; charset=UTF-8',
            headers: {
              'Authorization': '${accessToken.type} ${accessToken.data}'
            },
          ))
          .then((response) => print(response.data))
          .catchError(
              (e) => print('error: $e '));
    } else {
      print("Failed to get Access Token");
    }
  });
}