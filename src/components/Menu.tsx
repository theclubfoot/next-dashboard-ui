import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

interface MenuItem {
  icon: string;
  label: string;
  href: string;
  visible: UserRole[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuProps {
  userRole?: UserRole;
}

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu: React.FC<MenuProps> = ({ userRole }) => {
  return (
    <nav className="flex flex-col w-full">
      {menuItems.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          <h3 className="hidden lg:block text-xs font-medium text-gray-400 mb-3 px-2">{section.title}</h3>
          <ul className="space-y-1">
            {section.items
              .filter(item => !userRole || item.visible.includes(userRole))
              .map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link 
                    href={item.href} 
                    className="flex items-center justify-center lg:justify-start gap-3 px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
                  >
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={24}
                        height={24}
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="hidden lg:block text-sm">{item.label}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Menu;