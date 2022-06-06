# randomSeedMap

## 目的
・redux,pixi.js,texturepackerを使用し、ゲームの開発環境を作る（技術検証）

・texturepacker

https://www.codeandweb.com/texturepacker

・redux

https://redux.js.org/

・pixi.js

https://pixijs.com/

## 技術選定理由
・redux

大規模プロジェクト向けのreactフレームワーク

大規模開発の入り口として覚えたかったため選定

コンポーネント機能、reducerの結合、storeの統合など、疎結合でメンテナンスしやすいコードを書く練習

React hooksの構成に慣れる

・pixi.js

2dにおいてレンダリング速度が最も早いライブラリとして選定

・texturepacker

スプライトを個別ではなくjsonで管理したかったため、選定

## 仕様

・シード値を読み込み、ランダムにタイルマップオブジェクトを生成する

・リロードするとシード値が変更され、ランダムにタイルマップが生成される

・reduxの環境に、pixi.jsをコンポーネントとして呼び出せるようにする

・スプライトはtexturepackerを使用する

・スプライト素材はアセットストアなどから探してくる

・キャラクタースプライトはキャラクター合成器で生成

## 振り返り

### pixi.jsのコンポーネントで、reduxのstoreを読み込めない問題

pixi.jsの文脈にreduxの文脈を挿入することで解決した

`
import React from "react";

//react-pixiでは別のコンテキストでラップされているようなので
//Consumerでreduxのコンテキストの変更を感知し、stageの子コンポーネントに対して再度reduxのコンテキストでラップする
const ContextBridge = ({ render, Context, children }) => (
  <Context.Consumer>
    {value =>
      render(<Context.Provider value={value}>{children}</Context.Provider>)
    }
  </Context.Consumer>
);

export default ContextBridge;

`
`
export default function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  return (
    <>
      <div className="App">
        {/*renderPropで子コンポーネントを渡し、react-pixiコンポーネントにコンテキストを渡す*/}
        <ContextBridge
          Context={ReactReduxContext}
          render={(children) => (
            <Stage width={selector.stage.width} height={selector.stage.height}>
              {children}
            </Stage>
          )}
        >
          <Map />
          <Player />
        </ContextBridge>
      </div>
      <GameLoop />
      <UserInput />
    </>
  );
}
`

## コードが冗長になる

疎結合に書け、storeの安全性を担保する事はできるが、

このままだとインゲームを作り込む段階で手続きが冗長になる

解決手法として、インゲームはプロトタイプでreactで作り込み

その後にreduxでUIなどをカバーしていく構成が良いと思った
