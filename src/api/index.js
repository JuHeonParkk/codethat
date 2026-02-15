import mockItems from "./mock.json";
const { courses, questions } = mockItems;

// 키워드 검색 기능
function filterByKeyword(items, keyword) {
  const lowered = keyword.toLowerCase();
  return items.filter(({ title }) => title.toLowerCase().includes(lowered));
}

// 키워드 존재 여부에 따른 강좌 목록 반환
// 검색어에 해당하는 키워드를 파라미터로 받음
export function getCourses(keyword) {
  if (!keyword) return courses;
  return filterByKeyword(courses, keyword);
}

// slug에 해당하는 특정 강좌 조회
export function getCourseBySlug(courseSlug) {
  return courses.find((course) => course.slug === courseSlug);
}

// 키워드 존재 여부에 따른 질문 목록 반환
export function getQuestions(keyword) {
  if (!keyword) return questions;
  return filterByKeyword(questions, keyword);
}

// id에 해당하는 특정 질문 조회
export function getQuestionById(questionId) {
  return questions.find((question) => question.id === questionId);
}

// 위시리스트 기능
const WISHLIST_KEY = "codethat-wishlist";
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "{}");

// 위시리스트에 강좌 추가
export function addWishlist(courseSlug) {
  wishlist[courseSlug] = true;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

// 위시리스트에서 강좌 삭제
export function deleteWishlist(courseSlug) {
  delete wishlist[courseSlug];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

// 위시리스트에 담긴 강좌 목록 반환
export function getWishlist() {
  return courses.filter((course) => wishlist[course.slug]);
}
