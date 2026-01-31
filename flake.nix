{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = nixpkgs.lib.systems.flakeExposed;
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      formatter = forAllSystems (system: nixpkgs.legacyPackages.${system}.nixfmt-tree);

      devShells = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              importNpmLock.hooks.linkNodeModulesHook
              nodejs_22
              patchelf
            ];

            npmDeps = pkgs.importNpmLock.buildNodeModules {
              npmRoot = ./.;

              # workerd will cause vite to EPIPE if this is not here!
              # https://github.com/cloudflare/workerd/discussions/1515
              derivationArgs = {
                nativeBuildInputs = with pkgs; [
                  autoPatchelfHook
                ];

                buildInputs = with pkgs; [
                  musl
                ];
              };

              inherit (pkgs) nodejs;
            };
          };
        }
      );
    };
}
