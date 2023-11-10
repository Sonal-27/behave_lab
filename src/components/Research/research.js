import React from "react";
import "../Research/research.css";
import { Link } from 'react-router-dom';
import PsyArXiv_logo from '../../assets/PsyArXiv_logo.png';
import osf_logo from '../../assets/osf_logo.jpeg';
import journal_pubs from '../../assets/journal_pubs.png';


const Research = () => {
  return (
    <section id="research" className="d-flex justify-content-center">
      <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <h2><b>RESEARCH</b></h2>
        </div>
        <hr></hr>

        <div className="grid-item">
          <h3><b>COMPUTATIONAL DECISION SCIENCE</b></h3>
          <p>
          Decisions, almost by definition, link our thoughts to our actions. Our research uses computational models to characterize this critical link forcing us to specify the mental processes (i.e., memory, learning, or reward evaluation) involved in making a decision, the environments those choices take place in, and the coupling of the mind and the environment. By taking this approach, we strive to understand better how the mind works and formulate mathematical models to help individuals, groups, and organizations make better decisions. The lab has three tracks of work in this area: deliberation, choice environments, and translational modeling. 
          </p>
          <i><b>Key publications:</b></i>
          <ul>
            <li>
            Hertwig, R., Pleskac, T. J., Pachur, T., & Center for Adaptive Rationality. (2019). Taming Uncertainty. Cambridge, MA, MIT Press. 
            <a href="https://doi.org/10.7551/mitpress/11114.001.0001" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
            </li><li>
            Online digital supplement: <a href="https://taming-uncertainty.mpib-berlin.mpg.de/" target="_blank" rel="noreferrer" className="no-underline-link">https://taming-uncertainty.mpib-berlin.mpg.de/</a>
            </li>
          </ul>
          <p>
          </p>
        </div>

        <hr></hr>

        <div className="grid-item">
          <h3><b>DELIBERATION</b></h3>
          <p>
          How do people form a belief or a preference? We investigate this question from different angles, from perceptual and economic decisions to confidence judgments to probabilistic forecasts. Across these domains, we have shown a similar deliberation process where information samples are sequentially sampled about the object or event in question and accumulated over time. Our understanding of this evidence accumulation process is precise enough that in controlled laboratory settings, we can predict the choices people will make, the time it will take to make them, and the confidence they will have in them. 
          </p>
          <i><b>Key publications:</b></i>
          <ul>
            <li>
                Cai, X., & Pleskac, T. J. (in press). When alternative hypotheses shape your beliefs: Context effects in probability judgments. Cognition. 
                <a href="https://doi.org/10.1016/j.cognition.2022.105306" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
                <a href="https://osf.io/preprints/psyarxiv/vaze5/" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
                <a href="https://osf.io/3h7v4/" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
                Pleskac, T. J., Yu, S., Grunevski, S., & Liu, T. (2023). Attention biases preferential choice by enhancing an option's value. Journal of Experimental Psychology: General, 152(4), 993–1010 
                <a href="https://doi.org/10.1037/xge0001307" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
            <a href="https://osf.io/preprints/psyarxiv/n3ghb/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
            <a href="https://osf.io/xq2kt/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
                Kvam, P. D., Pleskac, T. J., Yu, S., & Busemeyer, J. R. (2015). Interference effects of choice on confidence: Quantum characteristics of evidence accumulation. Proceedings of the National Academy of Sciences, 112(34), 10645–10650. 
                <a href="https://doi.org/10.1073/pnas.1500688112" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
                <a href="https://osf.io/var6x/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
                Liu, T., & Pleskac, T. J. (2011). Neural correlates of evidence accumulation in a perceptual decision task. Journal of Neurophysiology, 106(5), 2383–2398. 
                <a href="https://doi.org/10.1152/jn.00413.2011" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
            </li>
            <li>
                Pleskac, T. J., & Busemeyer, J. R. (2010). Two-stage dynamic signal detection: A theory of choice, decision time, and confidence. Psychological Review, 117(3), 864–901. 
                <a href="https://doi.org/10.1037/A0019737" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
                <a href="https://osf.io/pxe7r/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
          </ul>
        </div>

        <hr></hr>

        <div className="grid-item">
          <h3><b>CHOICE ENVIRONMENTS</b></h3>
          <p>
          People’s decisions are shaped as much by the choice environments they make their decisions in, as by their own psychological processes. The question then is, what are the critical properties of these choice environments, and how are these structures used to make decisions? I have been working to understand how people use the relationship between risks and rewards to make decisions. This has led us to study why the inverse relationship between risks and rewards is so prevalent (it isn’t simply due to economic forces) and how people use this relationship to make inferences about the chances of different outcomes. 
          </p>
          <i><b>Key publications:</b></i>
          <ul>
            <li>
                Pleskac, T. J., Conradt, L., Leuker, C., & Hertwig, R. (2021). The ecology of competition: A theory of risk-reward environments in adaptive decision making. Psychological Review, 128, 315–335. 
                <a href="https://doi.org/10. 1037/rev0000261" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
                <a href="https://osf.io/preprints/psyarxiv/ewzcb/" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
                <a href="https://osf.io/f735w/" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
                Leuker, C., Pachur, T., Hertwig, R., & Pleskac, T. J. (2018). Exploiting risk–reward structures in decision making under uncertainty. Cognition, 175, 186–200. 
                <a href="https://doi.org/10.1016/j.cognition.2018.02.019" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
                <a href="https://osf.io/preprints/psyarxiv/kjc3r/" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
                <a href="https://osf.io/m4j79/" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
          </ul>        
        </div>

        <hr></hr>

        <div className="grid-item">
          <h3><b>TRANSLATION MODELING</b></h3>
          <p>
          Often computational models in psychology have been developed primarily to understand and predict behavior in laboratory tasks. I am interested in translating these laboratory-based computational models into tools for identifying and improving problematic decision making. In this area, I have worked with clinical psychologists and psychiatrists to use computational models to identify decision-making deficits among real world risk takers (e.g., drug users); organizational psychologists to characterize how students decide to quit school; and social psychologists, police officers, and criminal justice experts to understand a police officer’s decision to shoot. In our current NSF funded work, we have built a shooting simulator where police officers make decisions whether to shoot a suspect during videos of scenarios playing out realistic scenarios that an officer faces. These videos have been developed to manipulate race and other aspects experimentally and have been developed in consultation with police departments. We have integrated eye tracking into the simulator, tracking where officers are looking and capturing when and where an officer shoots. We also capture response time and the location on the screen of the shot. Altogether the goal is to model the real-time deliberation process officers use to decide to shoot.  
          </p>
          <i><b>Key publications:</b> </i>
          <ul>
            <li>
              Adaryukov, J., Biernat, M., Girard, J. & Pleskac†, T. J. (preprint). Weight and see: Integrating quantitative and qualitative information in graduate admissions. 
              <a href="https://osf.io/preprints/psyarxiv/j9yeq/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
            </li>
            <li>
              Lasagna, C. A., Pleskac, T. J., Burton, C. Z., McInnis, M. G., Taylor, S. F., & Tso, I. F. (2022). Mathematical Modeling of Risk-Taking in Bipolar Disorder: Evidence of Reduced Behavioral Consistency, With Altered Loss Aversion Specific to Those With History of Substance Use Disorder. Computational Psychiatry, 6(1), 96–116. 
              <a href="http://doi.org/10.5334/cpsy.61" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
              <a href="https://osf.io/preprints/psyarxiv/287sq/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
              <a href="https://osf.io/zjmy8/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
            Pleskac, T. J. (2008). Decision making and learning while taking sequential risks. Journal of Experimental Psychology: Learning, Memory, and Cognition, 34(1), 167. 
            <a href="https://doi.org/10.1037/0278-7393.34.1.167" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
            </li>
            <li>
              Pleskac, T. J., Cesario, J., & Johnson, D. J. (2018). How race affects evidence accumulation during the decision to shoot. Psychonomic Bulletin & Review, 25(4), 1301–1330. 
              <a href="https://doi.org/10.3758/s13423-017-1369-6" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
              <a href="https://osf.io/9qku5/" target="_blank" rel="noreferrer" className="no-underline-link">
                  <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
              Pleskac, T. J., Kyung, E., Chapman, G. B., & Urminsky, O. (2023). Blinded versus unblinded review: A field study comparing the equity and fairness of review processes (Preprint). 
              <a href="https://doi.org/10.31234/osf.io/q2tkw" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
              <a href="https://doi.org/10.31234/osf.io/q2tkw" target="_blank" rel="noreferrer" className="no-underline-link">
                  <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
              <a href="https://osf.io/vepwf/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
              Tump, A. N., Pleskac, T. J., & Kurvers, R. (2020). Wise or mad crowds? The cognitive mechanisms underlying information cascades. Science Advances. 
              <a href="https://doi.org/10.31234/osf.io/6vt2p" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
              <a href="https://osf.io/preprints/psyarxiv/6vt2p/" target="_blank" rel="noreferrer" className="no-underline-link">
                  <img src={PsyArXiv_logo} alt="PSYARXIF Logo" /> </a>
              <a href="https://osf.io/ejfm4/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
            <li>
              Wallsten, T. S., Pleskac, T. J., & Lejuez, C. W. (2005). Modeling behavior in a clinically diagnostic sequential risk-taking task. Psychological Review, 112(4), 862–880. 
              <a href="https://doi.org/10.1037/0033-295X.112.4.862" target="_blank" rel="noreferrer" className="no-underline-link">
                    <img src={journal_pubs} alt="journal publication" /> </a>
              <a href="https://osf.io/98nam/" target="_blank" rel="noreferrer" className="no-underline-link">
                <img src={osf_logo} alt="OSF Logo" /> </a>
            </li>
          </ul>
        </div>
        
        <hr></hr>

        <div className="d-flex justify-content-center">
        <p>Full list of publications can be found <Link to="/publications"> here </Link></p>
        </div>

      </div>
    </section>
  );
}

export default Research;
