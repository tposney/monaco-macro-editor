
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\userTargets.d.ts",
      "/**\n * A subclass of Set which manages the Token ids which the User has targeted\n * @internal\n */\ndeclare class UserTargets extends Set<Token> {\n  constructor(user: UserTargets['user']);\n\n  user: User;\n\n  /**\n   * Return the Token IDs which are user targets\n   */\n  get ids(): string[];\n\n  /**\n   * @override\n   * @remarks\n   * Returns void, but Set<T>.add returns boolean\n   */\n  add(token: Token): any;\n\n  /** @override */\n  clear(): void;\n\n  /**\n   * @override\n   * @remarks\n   * Returns void, but Set<T>.delete returns boolean\n   */\n  delete(token: Token): any;\n\n  /**\n   * Dispatch the targetToken hook whenever the user's target set changes\n   */\n  protected _hook(token: Token, targeted: boolean): void;\n}\n"
    ]
  