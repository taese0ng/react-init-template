# react-init-template

### 사용법

```bash
$ nvm list
```

nvm을 통해 node 버전을 확인하세요.

```bash
$ nvm install 20.12.1
```

지정 node인 [ 20.12.1 ] 버전을 설치하세요.

```bash
$ nvm list
```

정상적으로 [ 20.12.1 ]이 설치되었는지 확인하세요.

```bash
$ nvm use 20.12.1
```

[ 20.12.1 ] 버전을 사용하세요.

```bash
$ nvm alias defulat 20.12.1
```

환경 전체 기본 node 버전을 변경하고싶다면 이 명령어로 설정하세요.

```bash
$ npm install -g yarn    or    npm install yarn
```

yarn을 설치해주세요. (전역설치, 지역설치 원하는대로)

```bash
$ yarn install    or    yarn
```

packages에 있는 도구들을 설치합니다.

```bash
$ yarn start
```

프로젝트를 dev모드로 실행합니다.

```bash
$ yarn build
```

프로젝트를 build합니다.

## husky

### 만약 macOS에서 fork, github desktop 등 도구를 사용해서 commit할때 에러가 난다면?

```bash
$ sudo nano ~/.huskyrc #없다면 생성

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

저장해주고 실행하면 작동될 것.
