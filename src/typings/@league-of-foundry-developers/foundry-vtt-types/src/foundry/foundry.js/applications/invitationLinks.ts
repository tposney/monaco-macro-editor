
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\invitationLinks.d.ts",
      "/**\n * Game Invitation Links Reference\n */declare class InvitationLinks extends Application{/**\n * @defaultValue\n * ```typescript\n * {\n *   ...super.defaultOptions,\n *   id: 'invitation-links',\n *   template: 'templates/sidebar/apps/invitation-links.html',\n *   title: game.i18n.localize(\"INVITATIONS.Title\"),\n *   width: 400,\n * }\n * ```\n */static get defaultOptions():typeof Application['defaultOptions'];/** @override */\ngetData():{local?:string;remote?:string};/** @override */\nactivateListeners(html:JQuery):void;}"
    ]
  