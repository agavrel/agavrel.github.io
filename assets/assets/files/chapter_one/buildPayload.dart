import 'package:firebase_messaging/firebase_messaging.dart';

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
