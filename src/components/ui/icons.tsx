'use client'

import { LucideProps } from 'lucide-react'
import { IconType } from 'react-icons'
import { ArrowLeft as LucideArrowLeft, PlusCircle as LucidePlusCircle, Upload as LucideUpload, FolderOpen as LucideFolderOpen, Edit as LucideEdit, Trash as LucideTrash, BarChart as LucideBarChart, Clock as LucideClock, FileText as LucideFileText, Users as LucideUsers, Briefcase as LucideBriefcase, Key as LucideKey, Lock as LucideLock, Globe as LucideGlobe, Code as LucideCode, Server as LucideServer, ExternalLink as LucideExternalLink } from 'lucide-react'
import { FiArrowRight, FiCalendar, FiMail, FiCheck, FiAlertCircle, FiSearch, FiClock, FiTag, FiUsers, FiTarget, FiAward, FiHeart } from 'react-icons/fi'
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { BellIcon, UserCircleIcon, Cog6ToothIcon, HomeIcon, DocumentTextIcon, BriefcaseIcon, UserGroupIcon, CogIcon, ChartBarIcon, ServerIcon, PhotoIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type IconProps = {
  className?: string
  size?: number | string
  color?: string
  [key: string]: any
}

// Lucide icons
export const ArrowLeft = (props: LucideProps) => <LucideArrowLeft {...props} />
export const PlusCircle = (props: LucideProps) => <LucidePlusCircle {...props} />
export const Upload = (props: LucideProps) => <LucideUpload {...props} />
export const FolderOpen = (props: LucideProps) => <LucideFolderOpen {...props} />
export const Edit = (props: LucideProps) => <LucideEdit {...props} />
export const Trash = (props: LucideProps) => <LucideTrash {...props} />
export const BarChart = (props: LucideProps) => <LucideBarChart {...props} />
export const Clock = (props: LucideProps) => <LucideClock {...props} />
export const FileText = (props: LucideProps) => <LucideFileText {...props} />
export const Users = (props: LucideProps) => <LucideUsers {...props} />
export const Briefcase = (props: LucideProps) => <LucideBriefcase {...props} />
export const Key = (props: LucideProps) => <LucideKey {...props} />
export const Lock = (props: LucideProps) => <LucideLock {...props} />
export const Globe = (props: LucideProps) => <LucideGlobe {...props} />
export const Code = (props: LucideProps) => <LucideCode {...props} />
export const Server = (props: LucideProps) => <LucideServer {...props} />
export const ExternalLink = (props: LucideProps) => <LucideExternalLink {...props} />

// Feather icons
export const ArrowRightIcon = (props: IconProps) => <FiArrowRight {...props} />
export const CalendarIcon = (props: IconProps) => <FiCalendar {...props} />
export const MailIcon = (props: IconProps) => <FiMail {...props} />
export const CheckIcon = (props: IconProps) => <FiCheck {...props} />
export const AlertCircleIcon = (props: IconProps) => <FiAlertCircle {...props} />
export const SearchIcon = (props: IconProps) => <FiSearch {...props} />
export const ClockIcon = (props: IconProps) => <FiClock {...props} />
export const TagIcon = (props: IconProps) => <FiTag {...props} />
export const UsersIcon = (props: IconProps) => <FiUsers {...props} />
export const TargetIcon = (props: IconProps) => <FiTarget {...props} />
export const AwardIcon = (props: IconProps) => <FiAward {...props} />
export const HeartIcon = (props: IconProps) => <FiHeart {...props} />

// Font Awesome icons
export const GithubIcon = (props: IconProps) => <FaGithub {...props} />
export const TwitterIcon = (props: IconProps) => <FaTwitter {...props} />
export const LinkedInIcon = (props: IconProps) => <FaLinkedin {...props} />
export const YoutubeIcon = (props: IconProps) => <FaYoutube {...props} />

// Heroicons
export const BellIconOutline = (props: React.ComponentProps<typeof BellIcon>) => <BellIcon {...props} />
export const UserCircleIconOutline = (props: React.ComponentProps<typeof UserCircleIcon>) => <UserCircleIcon {...props} />
export const Cog6ToothIconOutline = (props: React.ComponentProps<typeof Cog6ToothIcon>) => <Cog6ToothIcon {...props} />
export const HomeIconOutline = (props: React.ComponentProps<typeof HomeIcon>) => <HomeIcon {...props} />
export const DocumentTextIconOutline = (props: React.ComponentProps<typeof DocumentTextIcon>) => <DocumentTextIcon {...props} />
export const BriefcaseIconOutline = (props: React.ComponentProps<typeof BriefcaseIcon>) => <BriefcaseIcon {...props} />
export const UserGroupIconOutline = (props: React.ComponentProps<typeof UserGroupIcon>) => <UserGroupIcon {...props} />
export const CogIconOutline = (props: React.ComponentProps<typeof CogIcon>) => <CogIcon {...props} />
export const ChartBarIconOutline = (props: React.ComponentProps<typeof ChartBarIcon>) => <ChartBarIcon {...props} />
export const ServerIconOutline = (props: React.ComponentProps<typeof ServerIcon>) => <ServerIcon {...props} />
export const PhotoIconOutline = (props: React.ComponentProps<typeof PhotoIcon>) => <PhotoIcon {...props} />
export const Bars3IconOutline = (props: React.ComponentProps<typeof Bars3Icon>) => <Bars3Icon {...props} />
export const XMarkIconOutline = (props: React.ComponentProps<typeof XMarkIcon>) => <XMarkIcon {...props} />
