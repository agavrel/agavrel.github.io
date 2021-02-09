import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:googleapis_auth/auth.dart';
import 'package:googleapis_auth/auth_io.dart';

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