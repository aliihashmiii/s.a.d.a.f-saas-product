export default function Home() {
  return (
    <>
      <div className="noise" />

      <header className="site-header wrap">
        <a className="brand" href="#top">S.A.D.A.F</a>
        <nav>
          <a href="#case-study">Case Study</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button small" href="#contact">Book a Call</a>
      </header>

      <main id="top" className="wrap">
        <section className="hero">
          <p className="kicker">Solutions for DevOps Automated FinOps</p>
          <h1>Real AWS savings, production-safe execution, measurable outcomes.</h1>
          <p className="subhead">
            This client case study shows how S.A.D.A.F identified <strong>$13,450/month</strong> in waste from a <strong>$45,234.50/month</strong> AWS bill and built a practical optimization roadmap.
          </p>
          <div className="hero-cta">
            <a className="button" href="#case-study">View Case Study</a>
            <a className="button ghost" href="#contact">Get Your Assessment</a>
          </div>
        </section>

        <section id="results" className="hero-metrics">
          <article>
            <p className="label">Current Monthly Spend</p>
            <p className="value">$45,234.50</p>
          </article>
          <article>
            <p className="label">Identified Waste</p>
            <p className="value">$13,450</p>
          </article>
          <article>
            <p className="label">Annual Impact</p>
            <p className="value">$161,400</p>
          </article>
        </section>

        <section id="case-study" className="panel">
          <h2>Top Waste Sources</h2>
          <p className="section-intro">Four categories drove most unnecessary cloud spend.</p>
          <div className="grid">
            <article className="card">
              <h3>Idle EC2 Instances</h3>
              <p className="big">12 instances</p>
              <p className="accent">$4,200/month</p>
            </article>
            <article className="card">
              <h3>Unattached EBS Volumes</h3>
              <p className="big">45 volumes</p>
              <p className="accent">$1,800/month</p>
            </article>
            <article className="card">
              <h3>Over-provisioned RDS</h3>
              <p className="big">5 databases</p>
              <p className="accent">$3,250/month</p>
            </article>
            <article className="card">
              <h3>Old Snapshots</h3>
              <p className="big">280 snapshots</p>
              <p className="accent">$2,850/month</p>
            </article>
          </div>
        </section>

        <section className="panel split">
          <div>
            <h2>Quick Wins Delivered in Week 1</h2>
            <ul className="wins">
              <li><span>Terminate idle instances</span><strong>$4,200/month</strong></li>
              <li><span>Delete unattached volumes</span><strong>$1,800/month</strong></li>
              <li><span>Right-size RDS databases</span><strong>$3,250/month</strong></li>
            </ul>
          </div>
          <aside className="impact">
            <p className="label">30-Day Impact</p>
            <p className="impact-number">$9,250/month</p>
            <p className="impact-sub">$111,000/year in first-phase savings.</p>
          </aside>
        </section>

        <section className="panel forecast">
          <h2>12-Month Forecast</h2>
          <div className="forecast-row"><span>Baseline (no optimization)</span><strong>$652,000</strong></div>
          <div className="forecast-row"><span>With optimization (30%)</span><strong>$456,000</strong></div>
          <div className="forecast-row highlight"><span>Projected Savings</span><strong>$196,000</strong></div>
        </section>

        <section id="contact" className="panel contact">
          <h2>Launch this strategy in your AWS account</h2>
          <p>Send your latest AWS cost report and receive a tailored FinOps action plan in 48 hours.</p>
          <a className="button" href="mailto:hello@sadaf-finops.com?subject=FinOps%20Assessment">Contact S.A.D.A.F</a>
        </section>
      </main>

      <footer className="wrap footer">
        <p>© S.A.D.A.F — Solutions for DevOps Automated FinOps</p>
      </footer>
    </>
  );
}
