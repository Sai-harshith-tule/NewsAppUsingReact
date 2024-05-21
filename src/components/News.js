import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Canada's Nurse helps lift Sparks past Storm on home soil in WNBA pre-season action | CBC Sports",
            "description": "Canadian Kia Nurse had nine points in 19 minutes of action as the Los Angeles Sparks opened their WNBA pre-season schedule with a 84-79 win over the Seattle Storm on Saturday at Rogers Place in Edmonton.",
            "url": "http://www.cbc.ca/sports/basketball/wnba-canada-game-edmonton-recap-may-4-1.7194505",
            "urlToImage": "https://i.cbc.ca/1.7194608.1714882967!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/wnba-edmonton-04052024.jpg",
            "publishedAt": "2024-05-10T08:07:18.6229827Z",
            "content": "Canadian Kia Nurse had nine points in 19 minutes of action as the Los Angeles Sparks opened their WNBA pre-season schedule with a 84-79 win over the Seattle Storm on Saturday at Rogers Place in Edmon… [+1955 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "WNBA announces full-time charter program for 2024, 2025 seasons amid player safety concerns | CBC Sports",
            "description": "The WNBA will use league-wide charter flights for the first time this season, the league announced Thursday. The charters will begin at the start of the regular season on Tuesday.",
            "url": "http://www.cbc.ca/sports/basketball/wnba-announces-charter-program-upcoming-season-1.7199804",
            "urlToImage": "https://i.cbc.ca/1.7199833.1715300475!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/aces-sparks-basketball.jpg",
            "publishedAt": "2024-05-10T08:07:17.5515444Z",
            "content": "The WNBA will use league-wide charter flights for the first time this season, the league announced Thursday.\r\nThe charters will begin at the start of the regular season.\r\n\"We are thrilled to announce… [+1730 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "'Where the hell have you been?' ask WNBA followers over the outrage at Caitlin Clark's salary | CBC News",
            "description": "While the massive gender gap in professional sports salaries might be getting attention now thanks to No. 1 draft pick Caitlin Clark's earnings, it's been a long-standing problem for women athletes.",
            "url": "http://www.cbc.ca/news/world/caitlin-clark-salary-wnba-1.7177262",
            "urlToImage": "https://i.cbc.ca/1.7177321.1713448555!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/wnba-fever-clark-basketball.jpg",
            "publishedAt": "2024-05-10T08:07:16.8945976Z",
            "content": "She's the NCAA Division I all-time leading scorer in both men's and women's basketball. She helped attract record-breaking March Madness TV audiences.\r\nNow, 22-year-old Caitlin Clark is the No. 1 dra… [+7347 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "NCAA star Caitlin Clark headed to Indiana Fever as 1st overall pick of WNBA draft | CBC Sports",
            "description": "Caitlin Clark was selected with the No. 1 pick in the WNBA draft by the Indiana Fever on Monday night, while Aaliyah Edwards of Kingston, Ont., was picked sixth by the Washington Mystics.",
            "url": "http://www.cbc.ca/sports/basketball/wnba-draft-recap-clark-edwards-april-15-1.7174492",
            "urlToImage": "https://i.cbc.ca/1.7174611.1713218065!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/clark-caitlin-041524.jpg",
            "publishedAt": "2024-05-10T08:07:15.6223569Z",
            "content": "Caitlin Clark admitted she was a bit nervous before being chosen with the No. 1 pick in the WNBA draft by the Indiana Fever, even though it was no surprise.\r\n\"I dreamt of this moment since I was in s… [+5926 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "About 17 million Canadians consider themselves women's sports fans, report says | CBC Sports",
            "description": "Allison Sandmeyer-Graves always suspected there was a large fan base for women's sports in Canada, and now she has proof.",
            "url": "http://www.cbc.ca/sports/canadian-women-sports-repot-april-22-1.7181419",
            "urlToImage": "https://i.cbc.ca/1.7181437.1713817749!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/pwhl-fans-042224.JPG",
            "publishedAt": "2024-05-10T08:07:14.8256807Z",
            "content": "Allison Sandmeyer-Graves always suspected there was a large fan base for women's sports in Canada, and now she has proof.\r\nSandmeyer-Graves, the CEO of Canadian Women &amp; Sport, led a panel of lumi… [+4279 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Women's sports are having a moment, but sexism is still holding back success | CBC News",
            "description": "As women's sports are experiencing a meteoric rise in popularity, breaking attendance and viewership records, a new report highlights how sexism still holds back women's professional sports — and investment decision-making.",
            "url": "http://www.cbc.ca/news/canada/womens-sports-sexualizing-athletes-1.7180765",
            "urlToImage": "https://i.cbc.ca/1.7180780.1713790614!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/wnba-draft-basketball.jpg",
            "publishedAt": "2024-05-10T08:07:13.8103079Z",
            "content": "\"Start doing it to me and we'll get along just fine.\"\r\nIt was a cringe-worthy moment right at the start of Caitlin Clark's first news conference with the Indiana Fever: when it was his turn to ask a … [+7492 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Toronto awarded WNBA expansion team to begin play in 2026 | CBC Sports",
            "description": "A group headed by Toronto billionaire Larry Tanenbaum has been granted an expansion franchise with the WNBA, CBC Sports has learned.",
            "url": "http://www.cbc.ca/sports/basketball/wnba-toronto-awarded-expansion-team-1.7198595",
            "urlToImage": "https://i.cbc.ca/1.6845232.1684367036!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/wnba-toronto.jpg",
            "publishedAt": "2024-05-10T08:07:12.5293762Z",
            "content": "Women's professional basketball is coming to Toronto. \r\nCBC Sports has learned that Kilmer Sports Inc., headed by Toronto billionaire Larry Tanenbaum, has been granted an expansion franchise with the… [+2121 chars]"
        },
        {
            "source": {
                "id": "google-news-ca",
                "name": "Google News (Canada)"
            },
            "author": "650 CKOM News Talk Sports",
            "title": "Sask. teachers reject contract offer with 90% of votes opposed - 650 CKOM News Talk Sports",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiJ2h0dHBzOi8vd3d3LmNrb20uY29tLzIwMjQvMDUvMDkvOTEyMTI0L9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-10T01:36:00+00:00",
            "content": null
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "John Fanta, Michael Cohen",
            "title": "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
            "description": "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
            "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
            "publishedAt": "2024-02-29T20:59:30Z",
            "content": "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": null,
            "title": "New Micah Parsons Show ",
            "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
            "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
            "urlToImage": null,
            "publishedAt": "2023-11-27T20:37:24.6381564Z",
            "content": null
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": null,
            "title": " Mikal Bridges Interview ",
            "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
            "url": "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
            "urlToImage": null,
            "publishedAt": "2023-11-27T20:37:24.3882176Z",
            "content": "Nets star sits down with Taylor Rooks for exclusive convo."
        },
        {
            "source": {
                "id": "nrk",
                "name": "NRK"
            },
            "author": "NRK",
            "title": "De siste sportsnyhetene fra NRK",
            "description": "Her får du de siste sportsnyhetene fra NRK.",
            "url": "https://www.nrk.no/sport/sportsnyheter-1.14660227#1.16877324.1.16877324",
            "urlToImage": "https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg",
            "publishedAt": "2019-08-14T09:09:42Z",
            "content": "9. mai2024kl.10:35Russlands planer om å avholde et «alternativ-OL» beviser at landet bare ønsker å bruke idretten som propaganda, hevder Ukrainas fungerende sportsminister Matviy Bidnyi.\r\nRussland pl… [+1096 chars]"
        }
    ]
    
    constructor(){
        super();
        this.state ={
            articles: this.articles,
            loading:  false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4fcb165c8f6848128486bdcc11dc5cc3&page=1&pageSize=16";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles, totalArticles: parsedData.totalResults})
    }
    handlePreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4fcb165c8f6848128486bdcc11dc5cc3&page=${this.state.page - 1}&pageSize=16`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles,
            loading: false
        })
    }
    handleNextClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4fcb165c8f6848128486bdcc11dc5cc3&page=${this.state.page + 1}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles,
            loading:false
        })
    }
    
  render() {
    return (
      <div className="container my-4 text-center">
        <h1>My News App - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-warning" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1> Math.ceil(this.state.totalResults/16)} className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News
