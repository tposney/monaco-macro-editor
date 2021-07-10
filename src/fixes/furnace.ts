export function furnaceFix(form: HTMLFormElement) {
  const furnaceEl = form.querySelector(".furnace-macro-command");

  if (furnaceEl) {
    (furnaceEl as HTMLDivElement).style.display = "none";
  }
}
