import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:dio/dio.dart' as diop;
import 'package:url_launcher/url_launcher.dart';

_launchURL(String url) async {
  if (await canLaunch(url)) {
    await launch(url);
  } else {
    throw 'Could not launch $url';
  }
}

class Nasa extends StatefulWidget {
  const Nasa({
    Key? key,
  }) : super(key: key);

  @override
  _Nasa createState() => _Nasa();
}

Future<List<Map<String, String>>> _getRequest(final int itemCount) async {
  const String NASA_API_KEY = '{{YOUR API KEY}}';
  const String SERVER_ENDPOINT_URL = 'https://api.nasa.gov/planetary/apod';

  var response = await diop.Dio().get(SERVER_ENDPOINT_URL,
      queryParameters: {
        'api_key': '$NASA_API_KEY',
        'count': itemCount.toString()
      },
      options: diop.Options(
        contentType: 'application/json; charset=UTF-8',
      ));

  List<String> keys = [
    'date',
    'explanation',
    'hdurl',
    'media_type',
    'service_version',
    'title',
    'url'
  ];

  List<Map<String, String>> queryResponse =
  List.generate(response.data.length, (i) {
    Map<String, String> item = {};
    for (String key in keys)
      if (response.data[i]['media_type'] == 'image')
        item.addAll({key: response.data[i][key]!});
    return item;
  });

  return queryResponse;
}

class _Nasa extends State<Nasa> {
  final int itemCount = 49;
  late final Future<List<Map<String, String>>> _astronomyPicturesOfTheDay;

  @override
  void initState() {
    super.initState();
    _astronomyPicturesOfTheDay = _getRequest(itemCount);
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Map<String, String>>>(
        future: _astronomyPicturesOfTheDay,
        builder: (context, AsyncSnapshot<List<Map<String, String>>> snapshot) {
          if (snapshot.connectionState == ConnectionState.done &&
              snapshot.hasData) {
            List<Map<String, String>> astronomyPicturesOfTheDay =
            snapshot.data!;
            return StaggeredGridView.countBuilder(
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              crossAxisCount: 3,
              itemCount: snapshot.data!.length,
              itemBuilder: (BuildContext context, int index) {
                Map<String, String> item = astronomyPicturesOfTheDay[index];
                return item['url'] != null
                    ? GestureDetector(
                    child: Hero(
                      tag: 'image$index',
                      child: Image.network(
                        item['url']!,
                        fit: BoxFit.fitWidth,
                      ),
                    ),
                    onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (_) => ImageDetails(
                                title: item['title']!,
                                imageUrl: item['url']!,
                                description: item['explanation']!))))
                    : Container();
              },
              staggeredTileBuilder: (int index) {
                int tileCount = index % 7 == 0 ? 2 : 1;
                return StaggeredTile.count(tileCount, tileCount);
              },
              mainAxisSpacing: 8.0,
              crossAxisSpacing: 8.0,
            );
          } else
            return CircularProgressIndicator();
        });
  }
}

class ImageDetails extends StatelessWidget {
  final String title;
  final String imageUrl;
  final String description;

  const ImageDetails(
      {Key? key,
        required this.title,
        required this.imageUrl,
        required this.description})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Material(
            child: SingleChildScrollView(
                child: Column(children: [
                  Padding(
                      padding: EdgeInsets.all(8),
                      child:
                      Text(title, style: TextStyle(color: Colors.pink, fontSize: 24))),
                  Image.network(imageUrl),
                  Padding(
                      padding: EdgeInsets.all(8),
                      child: Text(description,
                          style: TextStyle(color: Colors.blueAccent, fontSize: 15)))
                ]))));
  }
}
