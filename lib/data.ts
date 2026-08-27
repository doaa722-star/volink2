import type { LucideIcon } from 'lucide-react'
import {
  Stethoscope,
  Truck,
  Megaphone,
  GraduationCap,
  Leaf,
  Code2,
  HeartHandshake,
  Building2,
} from 'lucide-react'

export type Category = {
  id: string
  label: string
  icon: LucideIcon
}

export const categories: Category[] = [
  { id: 'all', label: 'الكل', icon: HeartHandshake },
  { id: 'education', label: 'التعليم', icon: GraduationCap },
  { id: 'health', label: 'الصحة', icon: Stethoscope },
  { id: 'environment', label: 'البيئة', icon: Leaf },
  { id: 'tech', label: 'التقنية', icon: Code2 },
  { id: 'community', label: 'المجتمع', icon: Building2 },
]

export type Opportunity = {
  id: string
  title: string
  org: string
  category: string
  categoryLabel: string
  location: string
  type: string
  volunteers: number
  needed: number
  urgent?: boolean
  icon: LucideIcon
  description: string
  skills: string[]
  match?: number
}

export const opportunities: Opportunity[] = [
  {
    id: 'doctor',
    title: 'طبيب متطوع',
    org: 'مؤسسة شبل التنموية',
    category: 'health',
    categoryLabel: 'الصحة',
    location: 'كريتر، عدن',
    type: 'ميداني',
    volunteers: 8,
    needed: 12,
    urgent: true,
    icon: Stethoscope,
    description:
      'تقديم الرعاية الصحية الأولية في المخيمات والأحياء المحتاجة ضمن حملة صحية موسمية.',
    skills: ['طب عام', 'إسعافات أولية', 'التواصل'],
    match: 96,
  },
  {
    id: 'logistics',
    title: 'منظّم لوجستيات',
    org: 'جمعية عدن للإغاثة',
    category: 'community',
    categoryLabel: 'المجتمع',
    location: 'المعلا، عدن',
    type: 'ميداني',
    volunteers: 15,
    needed: 20,
    icon: Truck,
    description:
      'تنسيق وتوزيع المساعدات وإدارة المخازن وجدولة قوافل الإغاثة بكفاءة.',
    skills: ['تنظيم', 'إدارة مخزون', 'قيادة فريق'],
    match: 88,
  },
  {
    id: 'social',
    title: 'مسؤول تواصل اجتماعي',
    org: 'مبادرة عدن الرقمية',
    category: 'tech',
    categoryLabel: 'التقنية',
    location: 'عن بُعد',
    type: 'عن بُعد',
    volunteers: 4,
    needed: 6,
    icon: Megaphone,
    description:
      'إدارة منصات التواصل وصناعة محتوى توعوي لإبراز أثر الحملات التطوعية.',
    skills: ['تصميم محتوى', 'تسويق رقمي', 'كتابة'],
    match: 91,
  },
  {
    id: 'teacher',
    title: 'معلم برمجة للأطفال',
    org: 'مؤسسة شبل التنموية',
    category: 'education',
    categoryLabel: 'التعليم',
    location: 'خور مكسر، عدن',
    type: 'ميداني',
    volunteers: 6,
    needed: 10,
    icon: GraduationCap,
    description:
      'تقديم ورش تعليمية تفاعلية لتعليم أساسيات البرمجة والتفكير المنطقي للأطفال.',
    skills: ['برمجة', 'تدريس', 'صبر'],
    match: 84,
  },
  {
    id: 'cleanup',
    title: 'منسّق حملة نظافة',
    org: 'فريق عدن الأخضر',
    category: 'environment',
    categoryLabel: 'البيئة',
    location: 'التواهي، عدن',
    type: 'ميداني',
    volunteers: 25,
    needed: 30,
    icon: Leaf,
    description:
      'تنظيم حملات نظافة ونشر الوعي البيئي وإدارة فرق التطوع الميدانية.',
    skills: ['تنظيم فعاليات', 'حشد تطوعي'],
    match: 79,
  },
  {
    id: 'developer',
    title: 'مطور واجهات أمامية',
    org: 'مبادرة عدن الرقمية',
    category: 'tech',
    categoryLabel: 'التقنية',
    location: 'عن بُعد',
    type: 'عن بُعد',
    volunteers: 3,
    needed: 5,
    icon: Code2,
    description:
      'المساهمة في بناء منصات رقمية للجمعيات الخيرية وتحسين تجربة المستخدم.',
    skills: ['React', 'واجهات', 'TypeScript'],
    match: 93,
  },
]
