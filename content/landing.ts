export type PainPoint = {
  audience: string;
  title: string;
  description: string;
  items: string[];
};

export type CoreModule = {
  name: string;
  question: string;
  description: string;
  highlights: string[];
};

export const navItems = [
  { label: "Benchmark", href: "#benchmark" },
  { label: "Workflows", href: "#workflows" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Insights", href: "#insights" },
];

export const hero = {
  eyebrow: "Coding Agent Intelligence Platform",
  title: "Coding Agent 时代的基础设施门户",
  description:
    "CAIP 帮助开发者、技术管理者、产品经理和决策者理解、评估、治理、落地并可衡量地使用 Coding Agent。",
  primaryCta: "加入早期访问",
  secondaryCta: "查看 MVP 模块",
  proofPoints: ["Agent 选型评测", "Workflow Marketplace", "企业治理与 ROI"],
};

export const painPoints: PainPoint[] = [
  {
    audience: "开发者",
    title: "工具太多，经验难复用，上下文难管理",
    description:
      "市场每天出现新的 Agent，但开发者缺少统一评测体系，也缺少可复用的 Prompt、Workflow 和 Context Engineering 方法。",
    items: ["Agent 选型困难", "Prompt 与 Workflow 停留在个人经验", "跨 Session 项目认知难保持", "收益只能靠感觉判断"],
  },
  {
    audience: "技术管理者",
    title: "团队使用不可见，治理体系尚未建立",
    description:
      "管理者需要知道团队用了哪些 Agent、哪些代码由 Agent 生成，以及 Agent 是否触碰了安全、合规和生产边界。",
    items: ["缺少 Agent Adoption Dashboard", "缺少 RBAC、Audit、Compliance", "无法形成组织级知识飞轮"],
  },
  {
    audience: "决策者",
    title: "投入价值与供应商选择缺少可信依据",
    description:
      "CEO、CTO 需要回答效率、成本、交付周期和 ROI 问题，也需要比较自建、SaaS、IDE Agent 与私有化方案。",
    items: ["AI Coding 效率提升难量化", "供应商成本与安全差异不透明", "缺少可信企业案例与趋势数据"],
  },
  {
    audience: "产品经理",
    title: "从需求到代码缺少 AI Native 协作链路",
    description:
      "未来产品经理不一定写代码，但需要掌握 PRD Prompt、User Story Prompt 和 Acceptance Prompt。",
    items: ["缺少需求到代码的可追踪链路", "Prompt 方法论尚未成熟", "产品、研发、Agent 协作割裂"],
  },
];

export const coreModules: CoreModule[] = [
  {
    name: "Agent Benchmark Center",
    question: "哪个 Agent 在什么场景最强？",
    description:
      "围绕大型项目、Java、微服务、重构、测试生成、需求开发等真实场景建立可比较、可解释的评测体系。",
    highlights: ["多 Agent 横向对比", "任务场景化评测", "成本、速度、质量综合评分"],
  },
  {
    name: "Workflow Marketplace",
    question: "最优秀开发者如何使用 Agent？",
    description:
      "沉淀 Bug 修复、重构、Code Review、测试生成、PR 创建、DDD 建模、性能优化等可复用工作流。",
    highlights: ["Prompt 模板", "工作流版本管理", "团队最佳实践复用"],
  },
  {
    name: "Enterprise ROI Dashboard",
    question: "AI Coding 到底创造了多少价值？",
    description:
      "把 Agent 使用、代码贡献、质量变化、交付周期、治理成本和安全风险纳入统一指标体系。",
    highlights: ["Agent 贡献率", "ROI 与效率分析", "治理、审计与合规视图"],
  },
];

export const audiences = [
  {
    role: "开发者",
    value: "找到适合任务的 Agent，复用高手工作流，建立项目级上下文能力。",
  },
  {
    role: "团队管理者",
    value: "看清团队 Agent 使用情况，建立治理边界，沉淀组织级最佳实践。",
  },
  {
    role: "决策者",
    value: "用可信数据判断投入价值，比较供应商方案，制定 AI Coding 战略。",
  },
  {
    role: "产品经理",
    value: "用 AI Native 方法把 PRD、用户故事和验收标准连接到代码交付。",
  },
];

export const positioning = {
  headline: "The Gartner + Stack Overflow + HuggingFace of Coding Agents",
  description:
    "CAIP 结合 Gartner 的行业研究能力、Stack Overflow 的社区知识能力和 HuggingFace 的生态承载能力，成为 Coding Agent 时代的操作系统层认知基础设施。",
  pillars: ["行业研究", "社区知识", "Agent 生态", "治理与 ROI"],
};

export const roadmap = [
  {
    phase: "01",
    title: "建立评测中心",
    copy: "先用标准化场景回答 Agent 选型问题，形成可信数据资产。",
  },
  {
    phase: "02",
    title: "开放工作流市场",
    copy: "把个人 Prompt 经验升级为可发现、可复用、可治理的 Workflow。",
  },
  {
    phase: "03",
    title: "进入企业 ROI 与治理",
    copy: "连接团队使用数据、代码交付指标、安全合规策略和管理层决策。",
  },
];
