const views = {
  overview: `
    <section class="card">
      <h2>V1 Unified Portal Boundary</h2>
      <p class="small">One account system, one navigation framework, and three independent business lanes sharing one language and data standard.</p>
      <div class="grid">
        <div class="card">
          <h3>Benchmark Center</h3>
          <p>Evaluate coding agents by scenario, language, and quality metrics.</p>
        </div>
        <div class="card">
          <h3>Workflow Marketplace</h3>
          <p>Share reusable workflows with versioning, review, and ratings.</p>
        </div>
        <div class="card">
          <h3>ROI Dashboard</h3>
          <p>Track impact, efficiency gains, and organizational value from agent usage.</p>
        </div>
      </div>
    </section>
    <section class="card">
      <h2>Three-Phase Delivery</h2>
      <ul>
        <li>Phase 1: Portal shell + minimum viable chain in all modules</li>
        <li>Phase 2: Unified cross-module data and reporting</li>
        <li>Phase 3: Governance, audit, and enterprise controls</li>
      </ul>
    </section>
  `,
  benchmark: `
    <section class="card">
      <h2>Agent Benchmark Center</h2>
      <ul>
        <li>Evaluation dimensions: quality, speed, cost, reliability</li>
        <li>Task sets: bug fix, refactor, test generation, feature delivery</li>
        <li>Scoring: weighted score + confidence level</li>
        <li>Output: scenario ranking and trend view</li>
      </ul>
    </section>
    <section class="card">
      <h3>Initial Standards</h3>
      <p class="small">Use shared entities: Agent, TaskType, ExecutionRecord, OutputQuality.</p>
    </section>
  `,
  workflow: `
    <section class="card">
      <h2>Workflow Marketplace</h2>
      <ul>
        <li>Template structure: metadata + steps + inputs + expected outputs</li>
        <li>Versioning: semantic version with compatibility tags</li>
        <li>Submission review: policy checks and peer moderation</li>
        <li>Reuse: fork, adapt, and rating model</li>
      </ul>
    </section>
    <section class="card">
      <h3>Initial Standards</h3>
      <p class="small">Use shared entities: Workflow, TaskType, TeamDimension, ExecutionRecord.</p>
    </section>
  `,
  roi: `
    <section class="card">
      <h2>Enterprise ROI Dashboard</h2>
      <ul>
        <li>Collection spec: cycle time, review throughput, defect rate, adoption rate</li>
        <li>Efficiency model: before/after baseline and normalized trend</li>
        <li>ROI model: value created - cost invested</li>
        <li>Views: team dashboard, organization dashboard, executive summary</li>
      </ul>
    </section>
    <section class="card">
      <h3>Initial Standards</h3>
      <p class="small">Use shared entities: TimeCost, OutputQuality, TeamDimension, ExecutionRecord.</p>
    </section>
  `,
  foundation: `
    <section class="card">
      <h2>Cross-Module Foundation</h2>
      <div class="grid">
        <div>
          <h3>Platform</h3>
          <ul>
            <li>User identity and access control</li>
            <li>Organization and team model</li>
            <li>API gateway and audit logs</li>
          </ul>
        </div>
        <div>
          <h3>Operations</h3>
          <ul>
            <li>Events and observability</li>
            <li>Search and tagging</li>
            <li>Review and publishing workflow</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="card">
      <h2>End-to-End Validation Loop</h2>
      <p>Selection (Benchmark) → Reuse (Workflow) → Value Proof (ROI)</p>
    </section>
  `,
};

const app = document.getElementById("app");
const tabs = document.querySelectorAll(".tab");

function render(view) {
  app.innerHTML = views[view] || views.overview;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    render(tab.dataset.view);
  });
});

render("overview");
