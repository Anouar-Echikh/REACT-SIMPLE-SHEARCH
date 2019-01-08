import React, { Component } from "react";
import Header from "./header";
import List from "./list";
import "./App.css";

const news = [
  {
    title:
      "اعتقال وإخفاء قسري.. انتقادات لسجل البحرين الحقوقي في 2018وزير خارجية قطر: ما تحتاجه المنطقة هو الحوار وليس المراهقة السياسي",
    text:
      "قال وزير الخارجية القطري الشيخ محمد بن عبد الرحمن آل ثاني إن افتعال  الأزمات وخلق الأعداء ليس بالسياسة الناجعة، خصوصا في المنطقة العربي"
  },
  {
    title: "اعتقال وإخفاء قسري.. انتقادات لسجل البحرين الحقوقي في 2018",
    text:
      "قالت مؤسسة  الحقوقية الدولية إنها رصدت في تقرير لها خلال عام 2018 استمرار مملكة البحرين في الانتهاكات ضد مواطنيها، على خلفية النشر على مواقع التواصل الاجتماعي."
  },
  {
    title: "غسيل أموال وتواطؤ مع السعودية.. اتهامات تلاحق ترامب بمجلس النواب",
    text:
      "غسيل أموال وتواطؤ مع السعودية.. اتهامات تلاحق ترامب بمجلس النواوعد النائب الديمقراطي إيريك سوالويل بالتحقيق في الاشتباه بتورط مؤسسة دونالد ترامب بغسيل أموال وفي علاقاته بالسعودية، وذلك بعد مطالبة الديمقراطية رشيدة طليب بمحاكمة ترامب معتبرة أنه يشكل تهديدا للديمقراطية."
  },
  {
    title: "هل يتم إعداد السيسي للرئاسة مدى الحياة؟",
    text:
      "قال تقرير بصحيفة لاكروا الفرنسية إن شخصيات قريبة من السلطة المصرية أفادت بتصريحات تؤيد مساعي إجراء تعديل دستوري، يسمح للرئيس المصري عبد الفتاح السيسي بالبقاء في السلطة بعد سنة 2022."
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newtab: news,
      text: "",
      filtred: news
    };
  }
  /*getText = text => {
    this.setState({ text: text });
  };*/
  filtredNews = text => {
    let filter = this.state.newtab.filter(
      (el, index) => el.title.indexOf(text) > -1
    );
    console.log(filter);
    this.setState({ filtred: filter });
  };
  render() {
    return (
      <div className="App">
        <Header filtredNews={text => this.filtredNews(text)} />
        {/*la fonction utilisée pour récuperer les données de CHILD doit etre parametré*/}
        <List news={this.state.filtred} />
      </div>
    );
  }
}

export default App;
